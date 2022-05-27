import Big from "big.js"

import CONFIG from "config"
import { loan } from "services/indexer/genql"
import * as utils from "utils"

interface CreateListingParams {
  asset: {
    tokenId: number
    address: string
  }
  amount: number
  duration: number
  interest: number
  userAddress: string
}

interface CancelListingParams {
  listingId: number
}

interface CreateOfferParmas {
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
  user: string
}

export async function createListing(params: CreateListingParams) {
  try {
    const [cryptoCreditContract, assetContract] = await Promise.all([
      window.tezos.wallet.at(CONFIG.CONTRACTS.CRYPTO_CREDIT),
      window.tezos.wallet.at(params.asset.address),
    ])

    // convert amount from tez to mutez
    const amount = Big(params.amount).mul(1e6).toNumber()
    // convert duration from days to seconds
    const duration = Big(params.duration).mul(24).mul(60).mul(60).toNumber()

    const addOperatorOperation = assetContract.methods.update_operators([
      {
        add_operator: {
          owner: params.userAddress,
          operator: CONFIG.CONTRACTS.CRYPTO_CREDIT,
          token_id: params.asset.tokenId,
        },
      },
    ])
    const removeOperatorOperation = assetContract.methods.update_operators([
      {
        remove_operator: {
          owner: params.userAddress,
          operator: CONFIG.CONTRACTS.CRYPTO_CREDIT,
          token_id: params.asset.tokenId,
        },
      },
    ])

    const createListingOperation = cryptoCreditContract.methods.create_listing(
      amount,
      params.asset.address,
      params.asset.tokenId,
      duration,
      params.interest
    )

    const op = await window.tezos.wallet
      .batch()
      .withContractCall(addOperatorOperation)
      .withContractCall(createListingOperation)
      .withContractCall(removeOperatorOperation)
      .send()

    await utils.contract.operationHandler(op)
  } catch (e) {
    console.error(e)
  }
}

export async function cancelListing(params: CancelListingParams) {
  try {
    const cryptoCreditContract = await window.tezos.wallet.at(
      CONFIG.CONTRACTS.CRYPTO_CREDIT
    )

    const op = await cryptoCreditContract.methods
      .cancel_listing(params.listingId)
      .send()

    await utils.contract.operationHandler(op)
  } catch (e) {
    console.error(e)
  }
}

export async function createOffer(params: CreateOfferParmas) {
  try {
    const cryptoCreditContract = await window.tezos.wallet.at(
      CONFIG.CONTRACTS.CRYPTO_CREDIT
    )

    // convert amount from tez to mutez
    const amount = Big(params.amount).mul(1e6).toNumber()
    // convert duration from days to seconds
    const duration = Big(params.duration).mul(24).mul(60).mul(60).toNumber()

    const op = await cryptoCreditContract.methods
      .create_offer(amount, duration, params.interest, params.listingId)
      .send({
        amount: amount,
        mutez: true,
      })

    await utils.contract.operationHandler(op)
  } catch (e) {
    console.error(e)
  }
}

export async function cancelOffer(params: CancelOfferParams) {
  try {
    const cryptoCreditContract = await window.tezos.wallet.at(
      CONFIG.CONTRACTS.CRYPTO_CREDIT
    )

    const op = await cryptoCreditContract.methods
      .cancel_offer(params.offerId)
      .send()

    await utils.contract.operationHandler(op)
  } catch (e) {
    console.error(e)
  }
}

export async function acceptOffer(params: AcceptOfferParams) {
  try {
    const cryptoCreditContract = await window.tezos.wallet.at(
      CONFIG.CONTRACTS.CRYPTO_CREDIT
    )

    const op = await cryptoCreditContract.methods
      .accept_offer(params.offerId)
      .send()

    await utils.contract.operationHandler(op)
  } catch (e) {
    console.error(e)
  }
}

export async function repayLoan(params: RepayLoanParams) {
  try {
    const repaymentAmount = Big(params.loan.principal_amount)
      .add(Big(params.loan.principal_amount).mul(params.loan.interest).div(100))
      .toNumber()

    const cryptoCreditContract = await window.tezos.wallet.at(
      CONFIG.CONTRACTS.CRYPTO_CREDIT
    )

    const op =
      params.user === params.loan.lender
        ? await cryptoCreditContract.methods.repay_loan(params.loan.id).send()
        : await cryptoCreditContract.methods.repay_loan(params.loan.id).send({
            amount: repaymentAmount,
            mutez: true,
          })

    await utils.contract.operationHandler(op)
  } catch (e) {
    console.error(e)
  }
}
