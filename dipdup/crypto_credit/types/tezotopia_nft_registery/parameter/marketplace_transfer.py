# generated by datamodel-codegen:
#   filename:  marketplace_transfer.json

from __future__ import annotations

from typing import List

from pydantic import BaseModel, Extra


class MarketplaceTransferParameterItem(BaseModel):
    class Config:
        extra = Extra.forbid

    from_: str
    to_: str
    token_id: str


class MarketplaceTransferParameter(BaseModel):
    __root__: List[MarketplaceTransferParameterItem]