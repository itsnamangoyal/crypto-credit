import asyncio
import aiohttp
import json

from crypto_credit import models


def bytes_to_str(bytes: str):
    return bytearray.fromhex(bytes).decode()


async def get_ipfs_data(uri: str):
    ipfs_gateway_url = 'https://ipfs.tezotopia.com/ipfs/' + uri[7:]
    print(ipfs_gateway_url)
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(ipfs_gateway_url) as res:
                text = await res.text()
                data = json.loads(text)
                return data
    except Exception as e:
        return {
            "name": "N/A",
            "symbol": "N/A",
            "description": "N/A",
            "thumbnailUri": "N/A",
            "displayUri": "N/A",
            "creators": ["N/A"]
        }


async def add_metadata(uri_bytes: str):
    uri = bytes_to_str(uri_bytes)
    saved_ipfs = await models.Ipfs.filter(uri=uri).get_or_none()
    if saved_ipfs:
        return saved_ipfs
    else:
        ipfs_data = await get_ipfs_data(uri)
        ipfs = models.Ipfs(
            uri=uri,
            name=ipfs_data["name"],
            symbol=ipfs_data["symbol"],
            description=ipfs_data["description"],
            thumbnail=ipfs_data["thumbnailUri"],
            image=ipfs_data["displayUri"],
            creator=ipfs_data.get("creators", [""])[0]
        )
        await ipfs.save()
        return ipfs
