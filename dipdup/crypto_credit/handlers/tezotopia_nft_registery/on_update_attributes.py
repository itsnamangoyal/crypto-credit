
from dipdup.context import HandlerContext
from crypto_credit.types.tezotopia_nft_registery.storage import TezotopiaNftRegisteryStorage
from dipdup.models import Transaction
from crypto_credit.types.tezotopia_nft_registery.parameter.update_attributes import UpdateAttributesParameter

async def on_update_attributes(
    ctx: HandlerContext,
    update_attributes: Transaction[UpdateAttributesParameter, TezotopiaNftRegisteryStorage],
) -> None:
    ...