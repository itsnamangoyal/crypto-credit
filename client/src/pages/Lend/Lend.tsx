import { memo } from "react"

import { Loader, TokenCard } from "components"
import { useListings } from "hooks"
import { useAppSelector } from "store"
import { everything } from "@genql/runtime"

function Lend() {
  const user = useAppSelector((state) => state.wallet)
  const { data } = useListings({
    where: {
      creator: {
        _neq: user || undefined,
      },
      cancelled: {
        _eq: false,
      },
      accepted: {
        _eq: false,
      },
    },
    fields: {
      ...everything,
      offers: everything,
      token: {
        ...everything,
        ipfs: everything,
      },
    },
    limit: 36,
  })

  if (!data) {
    return <Loader />
  }

  return (
    <div
      className={[
        "grid gap-3",
        "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-12",
      ].join(" ")}>
      {data.map((listing) => (
        <TokenCard key={listing.token.token_id} token={listing.token} />
      ))}
    </div>
  )
}

export default memo(Lend)
