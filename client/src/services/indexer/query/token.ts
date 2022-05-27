import { ZenObservable } from "zen-observable-ts"
import { wsClient } from "../client"
import {
  everything,
  token,
  tokenRequest,
  token_bool_exp,
  token_select_column,
} from "../genql"

interface SubscribeTokensParams {
  /**
   * address of the user
   */
  next: (data: token[]) => void
  where?: token_bool_exp
  fields: tokenRequest
  limit?: number
}

export function subscribeToken(
  params: SubscribeTokensParams
): ZenObservable.Subscription {
  return wsClient
    .subscription({
      token: [
        {
          where: params.where,
          limit: params.limit,
        },
        params.fields,
      ],
    })
    .subscribe({
      next(data: { token: token[] }) {
        params.next(data.token)
      },
      error(err: any) {
        console.log("ERROR", err)
      },
    })
}
