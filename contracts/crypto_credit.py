import smartpy as sp

fa2_transfer_type = sp.TList(
    sp.TRecord(
        from_=sp.TAddress,
        txs=sp.TList(
            sp.TRecord(
                amount=sp.TNat,
                to_=sp.TAddress,
                token_id=sp.TNat
            ).layout(("to_", ("token_id", "amount")))
        )
    ).layout(("from_", "txs"))
)

TOffer = sp.TRecord(
    listing=sp.TNat,
    creator=sp.TAddress,
    amount=sp.TNat,
    interest=sp.TNat,
    duration=sp.TNat,  # seconds
    accepted=sp.TBool,
    cancelled=sp.TBool,
)

TListing = sp.TRecord(
    creator=sp.TAddress,
    asset=sp.TRecord(
        address=sp.TAddress,
        token_id=sp.TNat
    ),
    amount=sp.TNat,
    # seconds
    duration=sp.TNat,
    interest=sp.TNat,
    accepted=sp.TBool,
    cancelled=sp.TBool,
)

TLoan = sp.TRecord(
    asset=sp.TRecord(
        address=sp.TAddress,
        token_id=sp.TNat
    ),
    loanee=sp.TAddress,
    lender=sp.TAddress,
    start_time=sp.TTimestamp,
    duration=sp.TNat,  # seconds
    interest=sp.TNat,
    principal_amount=sp.TNat,
    repaid=sp.TOption(sp.TBool)
)


class CryptoCredit(sp.Contract):
    def __init__(self):
        self.init(
            listings_count=sp.nat(0),
            listings=sp.big_map(
                l={},
                tkey=sp.TNat,
                tvalue=TListing
            ),
            offers_count=sp.nat(0),
            offers=sp.big_map(
                l={},
                tkey=sp.TNat,
                tvalue=TOffer
            ),
            loans=sp.big_map(
                l={},
                tkey=sp.TNat,
                tvalue=TLoan,
            ),
            loans_count=sp.nat(0)
        )

    @sp.entry_point
    def create_listing(self, asset_address, asset_token_id, amount, duration, interest):
        sp.set_type(asset_address, sp.TAddress)
        sp.set_type(asset_token_id, sp.TNat)
        sp.set_type(amount, sp.TNat)
        sp.set_type(duration, sp.TNat)
        sp.set_type(interest, sp.TNat)

        txs = sp.list([sp.record(
            to_=sp.self_address,
            token_id=asset_token_id,
            amount=1
        )])

        contract = sp.contract(
            fa2_transfer_type,
            asset_address,
            "transfer"
        ).open_some()

        sp.transfer([sp.record(
            from_=sp.sender,
            txs=txs
        )], sp.mutez(0), contract)

        listing = sp.record(
            creator=sp.sender,
            asset=sp.record(
                address=asset_address,
                token_id=asset_token_id
            ),
            amount=amount,
            duration=duration,
            interest=interest,
            accepted=False,
            cancelled=False
        )

        self.data.listings[self.data.listings_count] = listing
        self.data.listings_count += 1

    @ sp.entry_point
    def cancel_listing(self, listing_id):
        sp.set_type(listing_id, sp.TNat)

        # check if the listing exists
        sp.if ~self.data.listings.contains(listing_id):
            sp.failwith("LISTING_NOT_FOUND")

        # get the listing
        listing = self.data.listings.get(
            listing_id
        )

        # verify the ownership of the listing
        sp.verify_equal(listing.creator, sp.sender, "CREATOR_MISMATCH")

        # verify that listing is not already accepted
        sp.verify_equal(
            listing.accepted,
            False,
            message="LISTING_ACCPETED"
        )

        # verify that listing is not cancelled
        sp.verify_equal(
            listing.cancelled,
            False,
            message="LISTING_CANCELLED"
        )

        # transfer tokens to self
        txs = sp.list([sp.record(
            to_=listing.creator,
            token_id=listing.asset.token_id,
            amount=1
        )])

        contract = sp.contract(
            fa2_transfer_type,
            listing.asset.address,
            "transfer"
        ).open_some()

        # need to find out if this will throw error or not if actual call failed
        sp.transfer([sp.record(
            from_=sp.self_address,
            txs=txs
        )], sp.mutez(0), contract)

        listing.cancelled = True

    @sp.entry_point
    def create_offer(self, params):
        sp.set_type(
            params,
            sp.TRecord(
                listing_id=sp.TNat,
                amount=sp.TNat,
                interest=sp.TNat,
                duration=sp.TNat,
            )
        )

        # check if the listing exists
        sp.if ~self.data.listings.contains(params.listing_id):
            sp.failwith("LISTING_NOT_FOUND")

        # get the listing
        listing = self.data.listings.get(
            params.listing_id
        )

        # verify listing is not cancelled
        sp.verify_equal(
            listing.cancelled,
            False,
            message="LISTING_CANCELLED"
        )

        # verify listing is not already accepted
        sp.verify_equal(
            listing.accepted,
            False,
            message="LISTING_ACCEPTED"
        )

        # verify that offer creator is not listing creator
        sp.verify(
            sp.sender != listing.creator,
            message="CANNOT_OFFER_ON_OWN_LISTING"
        )

        # verify offer amount is equal to amount sent with transaction
        sp.verify_equal(
            sp.amount,
            sp.utils.nat_to_mutez(params.amount),
            message="AMOUNT_MISMATCH"
        )

        # add offer in storage
        self.data.offers[self.data.offers_count] = sp.record(
            creator=sp.sender,
            listing=params.listing_id,
            amount=params.amount,
            duration=params.duration,
            interest=params.interest,
            accepted=False,
            cancelled=False
        )

        # increase offers count in storage
        self.data.offers_count += 1

    @sp.entry_point
    def cancel_offer(self, offer_id):
        sp.set_type(offer_id, sp.TNat)

        # verify that offer exists
        sp.if ~self.data.offers.contains(offer_id):
            sp.failwith("OFFER_NOT_FOUND")

        offer = self.data.offers.get(offer_id)

        # verify that sender is the creator of the offer
        sp.verify_equal(
            offer.creator,
            sp.sender,
            message="CREATOR_MISMATCH"
        )

        # check that offer is not accepted
        sp.verify_equal(
            offer.accepted,
            False,
            message="OFFER_ACCEPTED"
        )

        # check that offer is not cancelled
        sp.verify_equal(
            offer.cancelled,
            False,
            message="OFFER_CANCELLED"
        )

        # transfer money back to the offer's creator
        sp.send(
            offer.creator,
            sp.utils.nat_to_mutez(offer.amount),
        )

        offer.cancelled = True

    @sp.entry_point
    def accept_offer(self, offer_id):
        sp.set_type(offer_id, sp.TNat)

        # verify offer exists
        sp.if ~self.data.offers.contains(offer_id):
            sp.failwith("OFFER_NOT_FOUND")

        offer = self.data.offers.get(
            offer_id,
            default_value=None
        )

        listing = self.data.listings.get(offer.listing)

        # verify listing is not cancelled
        sp.verify_equal(
            listing.cancelled,
            False,
            message="LISTING_CANCELLED"
        )

        # verify listing is not already accepted
        sp.verify_equal(
            listing.accepted,
            False,
            message="LISTING_ACCEPTED"
        )

        # verify offer is not cancelled
        sp.verify_equal(
            listing.cancelled,
            False,
            message="OFFER_CANCELLED"
        )

        # verify accepter is the listing creator
        sp.verify_equal(
            sp.sender,
            listing.creator,
            message="NOT_LISTING_CREATOR"
        )

        # set offer as accepted
        offer.accepted = True

        # set listing as accepted
        listing.accepted = True

        # send offer money to listing creator
        sp.send(
            listing.creator,
            sp.utils.nat_to_mutez(offer.amount)
        )

        # create loan
        self.data.loans[self.data.loans_count] = sp.record(
            asset=listing.asset,
            loanee=sp.sender,
            lender=offer.creator,
            start_time=sp.timestamp_from_utc_now(),
            duration=offer.duration,  # seconds
            interest=offer.interest,
            principal_amount=offer.amount,
            repaid=sp.none,
        )

        # increment loands count
        self.data.loans_count += 1
        pass

    @sp.entry_point
    def repay_loan(self, loan_id):
        sp.set_type(loan_id, sp.TNat)

        # get loan
        sp.if ~self.data.loans.contains(loan_id):
            sp.failwith("LOAN_NOT_FOUND")
        loan = self.data.loans.get(loan_id)

        # # check if loan is not repaid already
        sp.verify_equal(loan.repaid, sp.none, message="LOAN_ALREADY_REPAID")

        expired = sp.timestamp_from_utc_now() > loan.start_time.add_seconds(
            sp.to_int(loan.duration))

        is_lender = sp.sender == loan.lender
        is_loanee = sp.sender == loan.loanee

        sp.if ~is_lender & ~is_loanee:
            sp.failwith("NOT_LOANEE_OR_LENDER")

        asset_receiver = sp.local(
            "asset_receiver", sp.none, sp.TOption(sp.TAddress))

        # # if loanee failed to repay, then send the asset to lender
        sp.if is_lender:
            # verify that repayment duration has expired
            sp.verify_equal(expired, True, message="NOT_EXPIRED")

            loan.repaid = sp.some(False)

            asset_receiver.value = sp.some(loan.lender)

        sp.if is_loanee:
            # check that sender is loanee
            sp.verify_equal(expired, False, message="LOAN_EXPIRED")

            # calculat the amout to be repaid
            amount_to_repay = sp.local(
                "amount_to_repay", loan.principal_amount)
            # add percentage to principal amount
            amount_to_repay.value = sp.mul(
                amount_to_repay.value, 100 + loan.interest) // 100

            sp.verify_equal(amount_to_repay.value, sp.utils.mutez_to_nat(
                sp.amount), message="INCORRECT_AMOUNT")

            # send money to lender
            sp.send(loan.lender, sp.amount)

            loan.repaid = sp.some(True)

            asset_receiver.value = sp.some(loan.loanee)

        txs = sp.list([sp.record(
            to_=asset_receiver.value.open_some(),
            token_id=loan.asset.token_id,
            amount=1
        )])

        contract = sp.contract(
            fa2_transfer_type,
            loan.asset.address,
            "transfer"
        ).open_some()

        sp.transfer([sp.record(
            from_=sp.self_address,
            txs=txs
        )], sp.mutez(0), contract)


@sp.add_test(name="Tests")
def test():
    scenario = sp.test_scenario()
    contract = CryptoCredit()
    user1 = sp.test_account("1")
    user2 = sp.test_account("2")
    user3 = sp.test_account("3")

    scenario += contract

    scenario.h1("user1 creates a listing")
    contract.create_listing(sp.record(
        asset_address=sp.address("KT1JWMAHDuUMr82nQvS9AxEXyKU8MAeez4Ro"),
        asset_token_id=sp.nat(16115),
        amount=10000000,
        duration=10000000,
        interest=10
    )).run(
        sender=user1.address,
    )

    scenario.h1("user1 cannot cancel a listing that doesn't exist")
    contract.cancel_listing(sp.nat(2)).run(
        valid=False,
        sender=user1.address
    )

    scenario.h1("user2 cannot cancel a listing created by user1")
    contract.cancel_listing(sp.nat(0)).run(
        valid=False,
        sender=user2.address
    )

    scenario.h1("user1 is able to cancel a listing created by user1 itself")
    contract.cancel_listing(sp.nat(0)).run(
        sender=user1.address
    )

    scenario.h1("user2 creates a listing")
    contract.create_listing(sp.record(
        asset_address=sp.address("KT1JWMAHDuUMr82nQvS9AxEXyKU8MAeez4Ro"),
        asset_token_id=sp.nat(16116),
        amount=10000000,
        duration=100,
        interest=10
    )).run(
        sender=user2.address,
    )

    scenario.h1("user1 cannot create an offer with sending incorrect amount")
    contract.create_offer(
        sp.record(
            listing_id=sp.nat(1),
            amount=sp.nat(1),
            duration=sp.nat(1),
            interest=sp.nat(1),
        )
    ).run(
        valid=False,
        sender=user1.address,
    )

    scenario.h1("user1 cannot create an offer on cancelled listing")
    contract.create_offer(
        sp.record(
            listing_id=sp.nat(0),
            amount=sp.nat(0),
            duration=sp.nat(1),
            interest=sp.nat(1),
        )
    ).run(
        valid=False,
        sender=user1.address,
    )

    scenario.h1("user2 cannot create an offer on it's own listing")
    contract.create_offer(
        sp.record(
            listing_id=sp.nat(1),
            amount=sp.nat(1),
            duration=sp.nat(1),
            interest=sp.nat(1),
        )
    ).run(
        valid=False,
        sender=user2.address
    )

    scenario.h1("user1 creates on offer on user2's listing")
    contract.create_offer(
        sp.record(
            listing_id=sp.nat(1),
            amount=sp.nat(1000000),
            duration=sp.nat(60),
            interest=sp.nat(1),
        )
    ).run(
        sender=user1.address,
        amount=sp.utils.nat_to_mutez(1000000)
    )

    scenario.h1("user2 can't cancel user1's offer")
    contract.cancel_offer(0).run(
        valid=False,
        sender=user2.address
    )

    scenario.h1("user2 can't cancel offer that doesn't exist")
    contract.cancel_offer(2).run(
        sender=user2.address,
        valid=False
    )

    scenario.h1("user1 cancels it's own offer")
    contract.cancel_offer(0).run(
        sender=user1.address
    )

    scenario.h1("user1 can't cancel an offer that's already cancelled")
    contract.cancel_offer(0).run(
        sender=user1.address,
        valid=False
    )

    scenario.h1("user1 creates on offer on user2's listing again")
    contract.create_offer(
        sp.record(
            listing_id=sp.nat(1),
            amount=sp.nat(1000000),
            duration=sp.nat(60),
            interest=sp.nat(1),
        )
    ).run(
        sender=user1.address,
        amount=sp.utils.nat_to_mutez(1000000)
    )

    scenario.h1("user3 can't accept offer on user2's listing")
    contract.accept_offer(1).run(
        sender=user3.address,
        valid=False,
    )

    scenario.h1("user2 can accept offer on it's own listing")
    contract.accept_offer(1).run(
        sender=user2.address,
    )

    scenario.h1("user1 can't cancel an offer that's already accepted")
    contract.cancel_offer(1).run(
        sender=user1.address,
        valid=False
    )

    scenario.h1("user2 can't cancel a listing that's already accepted")
    contract.cancel_listing(1).run(
        sender=user2.address,
        valid=False
    )

    scenario.h1("user3 can't repay loan")
    contract.repay_loan(0).run(
        sender=user3.address,
        valid=False
    )

    scenario.h1("user1 can't repay loan before it's expired")
    contract.repay_loan(0).run(
        sender=user1.address,
        valid=False
    )

    scenario.h1("user2 can't repay loan with incorrect amount")
    contract.repay_loan(0).run(
        sender=user2.address,
        valid=False
    )

    scenario.h1("user2 can repay loan with correct amount")
    contract.repay_loan(0).run(
        sender=user2.address,
        amount=sp.utils.nat_to_mutez(1010000)
    )

    scenario.h1("user2 can repay an already repaid loan")
    contract.repay_loan(0).run(
        sender=user2.address,
        valid=False
    )

    scenario.h1("user1 can't repay loan if user2 already repaid the loan")
    contract.repay_loan(0).run(
        sender=user1.address,
        valid=False
    )
