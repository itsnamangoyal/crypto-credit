
from dipdup.context import HandlerContext
from crypto_credit.types.crypto_credit.parameter.cancel_listing import CancelListingParameter
from crypto_credit.types.crypto_credit.storage import CryptoCreditStorage
from dipdup.models import Transaction

import crypto_credit.models as models


async def on_cancel_listing(
    ctx: HandlerContext,
    cancel_listing: Transaction[CancelListingParameter, CryptoCreditStorage],
) -> None:
    listing_id = cancel_listing.parameter.__root__
    listing = await models.Listing.get_or_none(
        id=int(listing_id)
    )
    if listing is None:
        return

    listing.cancelled = True
    await listing.save()
