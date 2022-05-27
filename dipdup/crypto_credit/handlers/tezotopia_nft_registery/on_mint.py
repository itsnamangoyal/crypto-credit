
from pprint import PrettyPrinter
from dipdup.models import Transaction
from dipdup.context import HandlerContext

import crypto_credit.models as models

from crypto_credit.types.tezotopia_nft_registery.parameter.mint import MintParameter
from crypto_credit.types.tezotopia_nft_registery.storage import TezotopiaNftRegisteryStorage

from crypto_credit.helpers.ipfs import add_metadata


async def on_mint(
    ctx: HandlerContext,
    mint: Transaction[MintParameter, TezotopiaNftRegisteryStorage],
) -> None:

    for token_id in mint.storage.token_attributes:
        contract_address = mint.data.target_address
        attributes = mint.storage.token_attributes[token_id]
        metadata = mint.storage.token_metadata[token_id]
        try:
            ipfs = await add_metadata(metadata.token_info[''])
        except Exception:
            continue
        token = models.Token(
            token_id=token_id,
            uid=attributes.uid,
            ipfs=ipfs,
            owner=attributes.owner,
            address=contract_address)
        await token.save()
