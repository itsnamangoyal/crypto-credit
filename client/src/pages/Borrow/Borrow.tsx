import { memo, useMemo } from "react"

import { Loader, TokenCard } from "components"
import { useTokens } from "hooks"
import { Tab } from "@headlessui/react"
import { useAppSelector } from "store"
import { everything, token } from "services/indexer/genql"

const categories: {
  [key: string]: string
} = {
  "0": "Listed",
  "1": "Not Listed",
}

function Borrow() {
  const user = useAppSelector((state) => state.wallet)
  const { data } = useTokens({
    fields: {
      ...everything,
      ipfs: {
        ...everything,
      },
      listing: {
        ...everything,
        offers: {
          ...everything,
        },
      },
    },
    where: {
      owner: { _eq: user || undefined },
    },
    enabled: !!user,
  })

  const [listedTokens, notListedTokens] = useMemo(() => {
    const listedTokens: token[] = []
    const notListedTokens: token[] = []

    data?.filter((token) => {
      if (
        !!token.listing.find(
          (listing) => !listing.cancelled && !listing.accepted
        )
      ) {
        listedTokens.push(token)
      } else {
        notListedTokens.push(token)
      }
    })

    return [listedTokens, notListedTokens]
  }, [data])

  if (!listedTokens || !notListedTokens) {
    return <Loader />
  }

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <p className="text-3xl font-extrabold tracking-wide text-white">BORROW</p>
      <p className="mb-5 font-semibold text-white">
        Use you NFTs as collateral to lend from other users.
      </p>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 max-w-sm bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                [
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                ].join(" ")
              }>
              {categories[category]}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full h-[40rem] overflow-y-auto rounded-md">
          {[listedTokens, notListedTokens].map((tokens, index) => {
            return (
              <Tab.Panel
                key={index}
                className={[
                  "bg-white rounded-xl p-3",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  "grid gap-3 grid-cols-6",
                ].join(" ")}>
                {tokens.map((token) => {
                  return <TokenCard key={token.id} token={token} />
                })}
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default memo(Borrow)
