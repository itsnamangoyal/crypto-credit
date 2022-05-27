# generated by datamodel-codegen:
#   filename:  create_listing.json

from __future__ import annotations

from pydantic import BaseModel, Extra


class CreateListingParameter(BaseModel):
    class Config:
        extra = Extra.forbid

    amount: str
    asset_address: str
    asset_token_id: str
    duration: str
    interest: str
