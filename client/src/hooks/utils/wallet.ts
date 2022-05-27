import { useCallback } from "react"

import * as utils from "utils"

import { useAppDispatch, useAppSelector } from "store"
import { setWallet } from "store/wallet"

export function useWallet() {
  const dispatch = useAppDispatch()
  const wallet = useAppSelector((state) => state.wallet)

  async function connect() {
    if (wallet === null) {
      return
    }

    if (wallet) {
      return
    }

    dispatch(setWallet(null))

    const newWallet = await utils.wallet.connect()

    dispatch(setWallet(newWallet))
  }

  const disconnect = useCallback(async () => {
    if (!wallet) {
      return
    }

    await utils.wallet.disconnect()

    dispatch(setWallet(false))
  }, [dispatch, wallet])

  return {
    connect,
    disconnect,
    wallet,
  }
}
