
from dipdup.context import HandlerContext
from crypto_credit.types.tezotopia_nft_registery.storage import TezotopiaNftRegisteryStorage
from crypto_credit.types.tezotopia_nft_registery.parameter.transfer import TransferParameter
from dipdup.models import Transaction

import crypto_credit.models as models


async def on_transfer(
    ctx: HandlerContext,
    transfer: Transaction[TransferParameter, TezotopiaNftRegisteryStorage],
) -> None:
    for transfer_item in transfer.parameter.__root__:
        for tx in transfer_item.txs:
            new_owner = tx.to_

            crypto_credit_contract = ctx.config.get_contract("crypto_credit").address
            if (new_owner == crypto_credit_contract):
                continue

            token_id = tx.token_id
            token = await models.Token.get(token_id=int(token_id))

            
            if (new_owner == "tz1burnburnburnburnburnburnburjAYjjX"):
                await token.delete()
            else:
                token.owner = new_owner
                await token.save()
