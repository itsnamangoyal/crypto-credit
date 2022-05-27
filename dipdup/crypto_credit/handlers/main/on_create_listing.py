
from dipdup.context import HandlerContext
from crypto_credit.types.crypto_credit.parameter.create_listing import CreateListingParameter
from crypto_credit.types.crypto_credit.storage import CryptoCreditStorage
from dipdup.models import Transaction

import crypto_credit.models as models


async def on_create_listing(
    ctx: HandlerContext,
    create_listing: Transaction[CreateListingParameter, CryptoCreditStorage],
) -> None:
    for listing_id in create_listing.storage.listings:
        listing_in_contract_storage = create_listing.storage.listings[listing_id]

        token = await models.Token.get(
            token_id=int(listing_in_contract_storage.asset.token_id),
            address=listing_in_contract_storage.asset.address
        )

        listing = await models.Listing.create(
            id=listing_id,
            creator=listing_in_contract_storage.creator,
            amount=listing_in_contract_storage.amount,
            duration=listing_in_contract_storage.duration,
            interest=listing_in_contract_storage.interest,
            created_at=create_listing.data.timestamp,
            token=token
        )

        token.owner = listing_in_contract_storage.creator

        await token.save()
