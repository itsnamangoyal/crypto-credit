import { TezosToolkit } from "@taquito/taquito"
import { BeaconWallet } from "@taquito/beacon-wallet"
import { ColorMode, NetworkType } from "@airgap/beacon-sdk"

import CONFIG from "config"

declare global {
  interface Window {
    tezos: TezosToolkit
    wallet: BeaconWallet
  }
}

export function createNewTezosToolkit() {
  window.tezos = new TezosToolkit(CONFIG.RPC_NODE_URL)
}

export async function createNewBeaconWallet() {
  if (window.wallet) {
    await window.wallet.disconnect()
  }

  window.wallet = new BeaconWallet({
    name: "CryptoCredit",
    preferredNetwork: NetworkType.ITHACANET,
    colorMode: ColorMode.DARK,
  })
}

export async function connect() {
  if (!window.tezos) {
    createNewTezosToolkit()
  }

  if (!window.wallet) {
    await createNewBeaconWallet()
  }

  const activeAccount = await window.wallet.client.getActiveAccount()
  let address: string

  if (!activeAccount) {
    const permissions = await window.wallet.client.requestPermissions({
      network: {
        type: NetworkType.ITHACANET,
      },
    })
    address = permissions.address
  } else {
    address = activeAccount.address
  }

  if (!address) {
    return false
  }

  window.tezos.setWalletProvider(window.wallet)

  return address || false
}

export async function disconnect() {
  if (window.wallet) {
    window.wallet.clearActiveAccount()
  }
}
