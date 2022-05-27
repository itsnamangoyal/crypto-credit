import { ZenObservable } from "zen-observable-ts"
import { wsClient } from "../client"
import { everything, loan, loanRequest, loan_bool_exp } from "../genql"

interface SubscribeLoanParams {
  where?: loan_bool_exp
  fields?: loanRequest
  limit?: number
  next: (data: loan[]) => void
}

export function subscribeLoan(
  params: SubscribeLoanParams
): ZenObservable.Subscription {
  return wsClient
    .subscription({
      loan: [
        {
          where: params.where,
          limit: params.limit,
        },
        params.fields || {
          ...everything,
          token: {
            ...everything,
            ipfs: {
              ...everything,
            },
          },
        },
      ],
    })
    .subscribe({
      next(data: { loan: loan[] }) {
        params.next(data.loan)
      },
      error(err: any) {
        console.log("ERROR", err)
      },
    })
}
