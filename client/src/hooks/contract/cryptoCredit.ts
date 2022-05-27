import { useCallback } from "react"

import { useWallet } from "hooks/utils/wallet"
import * as crytoCreditContract from "services/contract/cryptoCredit"
import { loan } from "services/indexer/genql"

interface CreateListingParam {
  asset: {
    tokenId: number
    address: string
  }
  amount: number
  duration: number
  interest: number
}

interface CancelListingParam {
  listingId: number
}

interface CreateOfferParams {
  listingId: number
  amount: number
  duration: number
  interest: number
}

interface CancelOfferParams {
  offerId: number
}

interface AcceptOfferParams {
  offerId: number
}

interface RepayLoanParams {
  loan: loan
}

export function useCryptoCreditContract() {
  const wallet = useWallet()

  async function createListing(params: CreateListingParam) {
    await wallet.connect()

    if (!wallet.wallet) {
      return
    }

    await crytoCreditContract.createListing({
      ...params,
      userAddress: wallet.wallet,
    })
  }

  const cancelListing = useCallback(
    async (params: CancelListingParam) => {
      await wallet.connect()

      await crytoCreditContract.cancelListing({
        ...params,
        listingId: params.listingId,
      })
    },
    [wallet]
  )

  const createOffer = useCallback(
    async (params: CreateOfferParams) => {
      await wallet.connect()

      await crytoCreditContract.createOffer({
        ...params,
      })
    },
    [wallet]
  )

  const cancelOffer = useCallback(
    async (params: CancelOfferParams) => {
      await wallet.connect()

      await crytoCreditContract.cancelOffer({
        ...params,
      })
    },
    [wallet]
  )

  const acceptOffer = useCallback(
    async (params: AcceptOfferParams) => {
      await wallet.connect()

      await crytoCreditContract.acceptOffer({
        ...params,
      })
    },
    [wallet]
  )

  const repayLoan = useCallback(
    async (params: RepayLoanParams) => {
      await wallet.connect()

      if (!wallet.wallet) {
        return
      }

      await crytoCreditContract.repayLoan({
        ...params,
        user: wallet.wallet,
      })
    },
    [wallet]
  )

  return {
    createListing,
    cancelListing,
    createOffer,
    cancelOffer,
    acceptOffer,
    repayLoan,
  }
}
