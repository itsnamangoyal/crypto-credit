import { ZenObservable } from "zen-observable-ts"
import { wsClient } from "../client"
import { offer, offerRequest, offer_bool_exp } from "../genql"

interface SubscribeOfferParams {
  where?: offer_bool_exp
  fields: offerRequest
  limit?: number
  next: (data: offer[]) => void
}

export function subscribeOffer(
  params: SubscribeOfferParams
): ZenObservable.Subscription {
  return wsClient
    .subscription({
      offer: [
        {
          where: params.where,
          limit: params.limit,
        },
        params.fields,
      ],
    })
    .subscribe({
      next(data: { offer: offer[] }) {
        params.next(data.offer)
      },
      error(err: any) {
        console.log("ERROR", err)
      },
    })
}
