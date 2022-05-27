import { Params, useParams } from "react-router-dom"
import { useCallback, useEffect, useMemo, useState } from "react"

import {
  Loader,
  ListNFTForm,
  Button,
  CreateOfferForm,
  CancelListingForm,
  RepayLoanForm,
} from "components"
import { useListings, useTokens } from "hooks"
import * as utils from "utils"
import { everything, listing, loan, token } from "services/indexer/genql"
import { useAppSelector } from "store"
import { useCryptoCreditContract } from "hooks/contract/cryptoCredit"
import { useLoans, useOffers } from "hooks/indexer"
import Big from "big.js"
import dayjs from "dayjs"

type TokenRouteParams = "address" | "tokenId"

type ActionType = "list" | "cancel" | "create_offer" | "repay" | "settle"
type Actions = {
  [key in ActionType]: string
}

const actionName: Actions = {
  list: "List NFT",
  cancel: "Cancel Listing",
  create_offer: "Create Offer",
  repay: "Repay Loan",
  settle: "Settle Loan",
}

export default function Token() {
  const { address, tokenId } = useParams<Params<TokenRouteParams>>()
  const [action, setAction] = useState<undefined | ActionType>()
  const user = useAppSelector((state) => state.wallet)
  const contract = useCryptoCreditContract()
  const [loanExpired, setLoanExpired] = useState<undefined | boolean>(undefined)

  const { data: [token] = [undefined] } = useTokens({
    where: {
      address: { _eq: address },
      token_id: { _eq: Number(tokenId) },
    },
    fields: {
      ipfs: {
        ...everything,
      },
      ...everything,
    },
    limit: 1,
  })

  const { data: [listing] = [undefined] } = useListings({
    where: {
      cancelled: { _eq: false },
      token: {
        id: {
          _eq: token?.id,
        },
      },
    },
    fields: {
      ...everything,
    },
    limit: 1,
    enabled: !!token,
  })

  const { data: offers } = useOffers({
    where: {
      cancelled: { _eq: false },
      listing_id: {
        _eq: listing?.id,
      },
    },
    fields: {
      __scalar: true,
    },
    limit: 1,
    enabled: !!listing,
  })

  const { data: [loan] = [undefined] } = useLoans({
    where: {
      token: {
        id: {
          _eq: token?.id,
        },
      },
      repaid: { _is_null: true },
    },
    fields: everything,
    limit: 1,
    enabled: !!token,
  })

  useEffect(() => {
    if (!loan) {
      setLoanExpired(undefined)
      return
    }

    const _expiry = dayjs(loan.start_time).add(loan.duration, "seconds")

    const interval = setInterval(() => {
      const now = dayjs()
      const expired = _expiry.isBefore(now)

      if (expired) {
        loanExpired !== true && setLoanExpired(true)
        clearInterval(interval)
      } else {
        loanExpired !== false && setLoanExpired(false)
      }
    })

    return () => clearInterval(interval)
  }, [])

  const actions: ActionType[] = useMemo(() => {
    const _actions: ActionType[] = []

    if (!token) {
      return _actions
    }

    const isUserOwner = typeof user === "string" && token.owner === user
    const isListed = !!listing

    if (loan) {
      if (
        typeof user === "string" &&
        [loan.lender, loan.loanee].includes(user)
      ) {
        if (user === loan.lender && loanExpired === true) {
          _actions.push("settle")
        }
        if (user === loan.loanee) {
          if (loanExpired === true) {
            _actions.push("settle")
          } else if (loanExpired === false) {
            _actions.push("repay")
          }
        }
      }
    } else if (isListed) {
      if (isUserOwner) {
        _actions.push("cancel")
      } else {
        _actions.push("create_offer")
      }
    } else {
      if (isUserOwner) {
        _actions.push("list")
      }
    }

    return _actions
  }, [user, token, listing, loan, loanExpired])

  const onActionCancel = useCallback(() => {
    setAction(undefined)
  }, [])

  const onActionChoose = useCallback((action: ActionType) => {
    setAction(action)
  }, [])

  if (!token) return <Loader />

  return (
    <div className="flex flex-col items-stretch gap-2">
      <div className="grid gap-2 grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-gray-600 shadow-md grid place-items-center flex-1 p-5">
          <img
            src={utils.getTokenImageUrl(token.ipfs?.image)}
            alt={token.ipfs?.name}
            className="h-auto max-w-full h-auto"
          />
        </div>
        <div className="bg-gray-600 px-5 py-2 shadow-lg flex-1">
          <p className="text-xl text-white font-[700] traking-wide mb-1">
            NFT Information
          </p>
          {getInfoPoints(token).map((point) => (
            <div
              className="mb-2 bg-white rounded-sm py-2 px-3"
              key={point.label}>
              <p className="font-semibold text-black">{point.label}</p>
              <p className="text-black text-opacity-90">{point.value}</p>
            </div>
          ))}
          {listing && (
            <>
              <p className="text-xl text-white font-[700] traking-wide mb-1 mt-3">
                Listing Details
              </p>
              <div className="grid grid-cols-2 gap-2 items-stretch">
                {getListingDetails(listing).map((point) => (
                  <div
                    className="bg-white rounded-sm py-2 px-5 flex-1"
                    key={point.label}>
                    <p className="font-semibold text-black">{point.label}</p>
                    <p className="text-black text-opacity-90">{point.value}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          {loan && (
            <>
              <p className="text-xl text-white font-[700] traking-wide mb-1 mt-3">
                Loan Details
              </p>
              <div className="flex flex-wrap gap-2 items-stretch">
                {getLoanDetails(loan).map((point) => (
                  <div
                    className="bg-white rounded-sm py-2 px-5 flex-1 whitespace-nowrap"
                    key={point.label}>
                    <p className="font-semibold text-black">{point.label}</p>
                    <p className="text-black text-opacity-90">{point.value}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="bg-white px-5 py-2 shadow-md flex-1">
          {!action && actions.length > 0 && (
            <div className="font-bold">
              <p className="mb-3">ACTIONS</p>
              <div className="flex flex-col items-stretch gap-2">
                {actions?.map((action) => {
                  return (
                    <Button key={action} onClick={() => onActionChoose(action)}>
                      {actionName[action]}
                    </Button>
                  )
                })}
              </div>
            </div>
          )}

          {action && (
            <>
              {action === "list" && (
                <ListNFTForm token={token} onCancel={onActionCancel} />
              )}
              {action === "cancel" && listing && (
                <CancelListingForm
                  listingId={listing?.id}
                  onCancel={onActionCancel}
                />
              )}
              {action === "create_offer" && listing && (
                <CreateOfferForm listing={listing} onCancel={onActionCancel} />
              )}

              {action === "repay" && loan && (
                <RepayLoanForm loan={loan} onCancel={onActionCancel} />
              )}

              {action === "settle" && loan && (
                <RepayLoanForm settle loan={loan} onCancel={onActionCancel} />
              )}
            </>
          )}
        </div>
      </div>
      {offers ? (
        offers?.length > 0 ? (
          <div>
            <p className="text-xl font-bold text-white text-center mt-4">
              Offers
            </p>

            <table className="min-w-full text-center overflow-x-auto">
              <thead className="bg-white">
                <tr>
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-3">Amount</th>
                  <th className="py-2 px-3">Duration</th>
                  <th className="py-2 px-3">Interest</th>
                  <th className="py-2 px-3">User</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3">Actions</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {offers
                  .sort((a, b) => Number(a.cancelled) - Number(b.cancelled))
                  .map((offer, index) => (
                    <tr
                      key={offer.id}
                      className={[
                        index % 2 === 0 ? "bg-slate-800" : "bg-slate-600",
                      ].join(" ")}>
                      <td className="py-2 px-3">{index + 1}</td>
                      <td className="py-2 px-3">
                        {utils.format({ type: "amount", value: offer.amount })}{" "}
                        xtz
                      </td>
                      <td className="py-2 px-3">
                        {utils.format({
                          type: "duration",
                          value: offer.duration,
                        })}
                      </td>
                      <td className="py-2 px-3">{offer.interest}%</td>
                      <td className="py-2 px-3">{offer.creator}</td>
                      <td className="py-2 px-3">
                        {offer.accepted
                          ? "Accepted"
                          : offer.cancelled
                          ? "Cancelled"
                          : "Active"}
                      </td>
                      <td className="py-2 px-3 flex justify-center">
                        {!(offer.cancelled || offer.accepted) &&
                          user === offer.creator && (
                            <Button
                              variant="danger"
                              onClick={() =>
                                contract.cancelOffer({
                                  offerId: offer.id,
                                })
                              }>
                              Cancel
                            </Button>
                          )}
                        {!offer.cancelled && user === token.owner && (
                          <Button
                            variant="secondary"
                            onClick={() =>
                              contract.acceptOffer({
                                offerId: offer.id,
                              })
                            }>
                            Accept
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-2xl text-center text-white font-bold mt-3">
            No offers yet
          </p>
        )
      ) : null}
    </div>
  )
}

function getInfoPoints(token: token) {
  return [
    {
      label: "Name",
      value: `${token.ipfs?.name} #${utils.format({
        type: "tokenId",
        value: token.token_id,
      })}`,
    },
    {
      label: "Description",
      value: token.ipfs?.description,
    },
    {
      label: "Owner",
      value: token.owner,
    },
  ]
}

function getListingDetails(listing: listing) {
  return [
    {
      label: "Amount",
      value: `${utils.format({
        type: "amount",
        value: listing.amount,
      })} xtz`,
    },
    {
      label: "Duration",
      value: `${utils.format({
        type: "duration",
        value: listing.duration,
      })}`,
    },
    {
      label: "Interest Rate",
      value: `${utils.format({
        type: "interest",
        value: listing.interest,
      })}%`,
    },
    {
      label: "Time",
      value: `${utils.format({
        type: "timestamp",
        value: listing.created_at,
      })}`,
    },
  ]
}

function getLoanDetails(loan: loan) {
  return [
    {
      label: "Amount",
      value: `${utils.format({
        type: "amount",
        value: loan.principal_amount,
      })} xtz`,
    },
    {
      label: "Duration",
      value: `${utils.format({
        type: "duration",
        value: loan.duration,
      })}`,
    },
    {
      label: "Interest Rate",
      value: `${utils.format({
        type: "interest",
        value: loan.interest,
      })}%`,
    },
    {
      label: "Repayment Amount",
      value: `${utils.format({
        type: "amount",
        value: Big(loan.principal_amount)
          .plus(Big(loan.principal_amount).mul(Big(loan.interest).div(100)))
          .toNumber(),
      })} xtz`,
    },
    {
      label: "Started At",
      value: `${utils.format({
        type: "timestamp",
        value: loan.start_time,
      })}`,
    },
    {
      label: "Status",
      value:
        loan.repaid === null
          ? "Ongoing"
          : loan.repaid
          ? "Repaid"
          : "Not Repaid",
    },
    {
      label: "Lender",
      value: `${utils.format({
        type: "wallet",
        value: loan.lender,
      })}`,
    },
  ]
}
