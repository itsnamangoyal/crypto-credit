
from crypto_credit.types.crypto_credit.storage import CryptoCreditStorage
from dipdup.models import Transaction
from dipdup.context import HandlerContext
from crypto_credit.types.crypto_credit.parameter.cancel_offer import CancelOfferParameter

import crypto_credit.models as models


async def on_cancel_offer(
    ctx: HandlerContext,
    cancel_offer: Transaction[CancelOfferParameter, CryptoCreditStorage],
) -> None:
    offer_id = cancel_offer.parameter.__root__
    offer = await models.Offer.get_or_none(
        id=int(offer_id)
    )
    if offer is None:
        return
    offer.cancelled = True
    await offer.save()
