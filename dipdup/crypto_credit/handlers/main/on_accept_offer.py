
from crypto_credit.types.crypto_credit.storage import CryptoCreditStorage
from dipdup.models import Transaction
from crypto_credit.types.crypto_credit.parameter.accept_offer import AcceptOfferParameter
from dipdup.context import HandlerContext

from crypto_credit import models


async def on_accept_offer(
    ctx: HandlerContext,
    accept_offer: Transaction[AcceptOfferParameter, CryptoCreditStorage],
) -> None:
    offer_id = accept_offer.parameter.__root__

    offer = await models.Offer.get_or_none(id=int(offer_id))
    if offer is None:
        return

    listing = await models.Listing.get_or_none(id=int(offer.listing_id))
    offer.accepted = True
    listing.accepted = True

    for loan_id in accept_offer.storage.loans:
        loan_in_contract_storage = accept_offer.storage.loans[loan_id]

        token = await models.Token.get(
            id=int(loan_in_contract_storage.asset.token_id),
        )

        await models.Loan.create(
            id=loan_id,
            loanee=loan_in_contract_storage.loanee,
            lender=loan_in_contract_storage.lender,
            principal_amount=loan_in_contract_storage.principal_amount,
            interest=loan_in_contract_storage.interest,
            start_time=loan_in_contract_storage.start_time,
            duration=loan_in_contract_storage.duration,
            token=token
        )

    await listing.save()
    await offer.save()
