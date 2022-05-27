import { ZenObservable } from "zen-observable-ts"
import { wsClient } from "../client"
import { everything, listing, listingRequest, listing_bool_exp } from "../genql"

interface SubscribeListingParams {
  where?: listing_bool_exp
  fields: listingRequest
  limit?: number
  next: (data: listing[]) => void
}

export function subscribeListing(
  params: SubscribeListingParams
): ZenObservable.Subscription {
  return wsClient
    .subscription({
      listing: [
        {
          where: params.where,
          limit: params.limit,
        },
        params.fields,
      ],
    })
    .subscribe({
      next(data: { listing: listing[] }) {
        params.next(data.listing)
      },
      error(err: any) {
        console.log("ERROR", err)
      },
    })
}
