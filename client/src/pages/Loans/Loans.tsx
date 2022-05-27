import { Loader, LoanListItem } from "components"
import { useLoans, useOffers } from "hooks/indexer"
import { memo } from "react"
import { Link } from "react-router-dom"
import { everything } from "services/indexer/genql"
import { useAppSelector } from "store"

import * as utils from "utils"

function Offers() {
  const user = useAppSelector((state) => state.wallet)

  const { data: loansTaken } = useLoans({
    where: {
      loanee: { _eq: user || undefined },
    },
    fields: {
      __scalar: true,
      token: {
        ...everything,
        ipfs: everything,
      },
    },
    enabled: !!user,
  })

  const { data: loansGiven } = useLoans({
    where: {
      lender: { _eq: user || undefined },
    },
    fields: {
      __scalar: true,
      token: {
        ...everything,
        ipfs: everything,
      },
    },
    enabled: !!user,
  })

  if (!loansTaken || !loansGiven) {
    return <Loader />
  }

  return (
    <div>
      <p className="text-2xl text-white font-semibold">Loans Taken</p>
      {loansTaken.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="text-center min-w-full whitespace-nowrap">
            <thead className="bg-white">
              <tr>
                <th className="px-5 py-2">#</th>
                <th className="px-5 py-2">Token</th>
                <th className="px-5 py-2">Created At</th>
                <th className="px-5 py-2">Duration</th>
                <th className="px-5 py-2">Expiration Time</th>
                <th className="px-5 py-2">Principal Amount</th>
                <th className="px-5 py-2">Interest</th>
                <th className="px-5 py-2">Repayment Amount</th>
                <th className="px-5 py-2">Status</th>
                <th className="px-5 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {loansTaken?.map((loan, index) => (
                <LoanListItem key={loan.id} loan={loan} count={index + 1} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="font-xl text-gray-400">You have not taken any loans</p>
      )}

      <div className="mt-4">
        <p className="text-2xl text-white font-semibold">Loans Given</p>
        {loansGiven.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="text-center min-w-full whitespace-nowrap">
              <thead className="bg-white">
                <tr>
                  <th className="px-5 py-2">#</th>
                  <th className="px-5 py-2">Token</th>
                  <th className="px-5 py-2">Created At</th>
                  <th className="px-5 py-2">Duration</th>
                  <th className="px-5 py-2">Expiration Time</th>
                  <th className="px-5 py-2">Principal Amount</th>
                  <th className="px-5 py-2">Interest</th>
                  <th className="px-5 py-2">Repayment Amount</th>
                  <th className="px-5 py-2">Status</th>
                  <th className="px-5 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {loansGiven?.map((loan, index) => (
                  <LoanListItem key={loan.id} loan={loan} count={index + 1} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="font-xl text-gray-400">You have not taken any loans</p>
        )}
      </div>
    </div>
  )
}

export default memo(Offers)
