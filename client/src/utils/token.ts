export function getTokenImageUrl(
  ipfsUrl: string | undefined
): string | undefined {
  if (!ipfsUrl) {
    return undefined
  }
  return ipfsUrl.replace("ipfs://", "https://ipfs.tezotopia.com/ipfs/")
}
