
from calendar import c
from crypto_credit.types.crypto_credit.parameter.create_offer import CreateOfferParameter
from crypto_credit.types.crypto_credit.storage import CryptoCreditStorage
from dipdup.models import Transaction
from dipdup.context import HandlerContext


from crypto_credit import models


async def on_create_offer(
    ctx: HandlerContext,
    create_offer: Transaction[CreateOfferParameter, CryptoCreditStorage],
) -> None:
    for offer_id in create_offer.storage.offers:
        offer_in_contract_storage = create_offer.storage.offers[offer_id]

        listing = await models.Listing.get(
            id=int(offer_in_contract_storage.listing)
        )

        print(offer_in_contract_storage)

        await models.Offer.create(
            id=offer_id,
            duration=offer_in_contract_storage.duration,
            accepted=offer_in_contract_storage.accepted,
            cancelled=offer_in_contract_storage.cancelled,
            listing=listing,
            creator=offer_in_contract_storage.creator,
            amount=offer_in_contract_storage.amount,
            interest=offer_in_contract_storage.interest,
            created_at=create_offer.data.timestamp,
        )
