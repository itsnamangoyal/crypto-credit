
from crypto_credit.types.tezotopia_nft_registery.storage import TezotopiaNftRegisteryStorage
from crypto_credit.types.tezotopia_nft_registery.parameter.marketplace_transfer import MarketplaceTransferParameter
from dipdup.context import HandlerContext
from dipdup.models import Transaction

import crypto_credit.models as models


async def on_marketplace_transfer(
    ctx: HandlerContext,
    marketplace_transfer: Transaction[MarketplaceTransferParameter, TezotopiaNftRegisteryStorage],
) -> None:
    for marketplace_transfer_item in marketplace_transfer.parameter.__root__:
        new_owner = marketplace_transfer_item.to_
        token_id = marketplace_transfer_item.token_id
        token = await models.Token.get(token_id=int(token_id))
        token.owner = new_owner
        await token.save()
