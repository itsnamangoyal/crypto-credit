import { Loader, OfferListItem } from "components"
import { useOffers } from "hooks/indexer"
import { memo } from "react"
import { everything } from "services/indexer/genql"
import { useAppSelector } from "store"

function Offers() {
  const user = useAppSelector((state) => state.wallet)

  const { data: createdOffers } = useOffers({
    where: {
      creator: { _eq: user || undefined },
      cancelled: { _eq: false },
      accepted: { _eq: false },
    },
    fields: {
      __scalar: true,
      listing: {
        accepted: true,
        cancelled: true,
        token: {
          ...everything,
          ipfs: {
            ...everything,
          },
        },
      },
    },
    enabled: !!user,
  })

  const { data: receivedOffers } = useOffers({
    where: {
      cancelled: { _eq: false },
      accepted: { _eq: false },
      listing: {
        creator: {
          _eq: user || undefined,
        },
      },
    },
    fields: {
      __scalar: true,
      listing: {
        accepted: false,
        cancelled: false,
        creator: true,
        token: {
          ...everything,
          ipfs: {
            ...everything,
          },
        },
      },
    },
    enabled: !!user,
  })

  if (!createdOffers || !receivedOffers) {
    return <Loader />
  }

  return (
    <div>
      <p className="text-2xl text-white font-semibold whitespace-nowrap">
        Created Offers
      </p>
      {createdOffers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="text-center min-w-full">
            <thead className="bg-white">
              <tr>
                <th className="px-5 py-2">#</th>
                <th className="px-5 py-2">Token</th>
                <th className="px-5 py-2">Created At</th>
                <th className="px-5 py-2">Principal Amount</th>
                <th className="px-5 py-2">Interest</th>
                <th className="px-5 py-2">Repayment Amount</th>
                <th className="px-5 py-2">Status</th>
                <th className="px-5 py-2">Listing Status</th>
                <th className="px-5 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {createdOffers?.map((offer, index) => (
                <OfferListItem key={offer.id} offer={offer} count={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="font-xl text-gray-400">You have not created any offers</p>
      )}

      <p className="text-2xl text-white font-semibold mt-4">Received Offers</p>
      {receivedOffers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="text-center min-w-full w-fit whitespace-nowrap">
            <thead className="bg-white">
              <tr>
                <th className="px-5 py-2">#</th>
                <th className="px-5 py-2">Token</th>
                <th className="px-5 py-2">Created At</th>
                <th className="px-5 py-2">Principal Amount</th>
                <th className="px-5 py-2">Interest</th>
                <th className="px-5 py-2">Repayment Amount</th>
                <th className="px-5 py-2">Status</th>
                <th className="px-5 py-2">Listing Status</th>
                <th className="px-5 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {receivedOffers?.map((offer, index) => (
                <OfferListItem key={offer.id} offer={offer} count={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="font-xl text-gray-400">
          You have not received any offers
        </p>
      )}
    </div>
  )
}

export default memo(Offers)
