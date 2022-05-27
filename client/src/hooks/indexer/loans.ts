import { useEffect, useMemo, useRef } from "react"
import { ZenObservable } from "zen-observable-ts"
import { useQuery, useQueryClient } from "react-query"

import { subscribeLoan } from "services/indexer/query"
import { loan, loanRequest, loan_bool_exp } from "services/indexer/genql"

interface UseLoanParams {
  where?: loan_bool_exp
  limit?: number
  fields?: loanRequest
  enabled?: boolean
}

export function useLoans(params: UseLoanParams) {
  const subscriptionRef = useRef<undefined | ZenObservable.Subscription>()
  const queryClient = useQueryClient()

  const queryKey = useMemo(() => {
    return ["loan", params.where, params.limit]
  }, [params])

  useEffect(() => {
    if (params.enabled === false) {
      return
    }

    subscriptionRef.current = subscribeLoan({
      limit: params.limit,
      where: params.where,
      fields: params.fields,
      next(loans) {
        queryClient.setQueryData(queryKey, loans)
      },
    })

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe()
        subscriptionRef.current = undefined
      }
    }
  }, [queryKey, params, queryClient])

  return useQuery<loan[] | undefined>({
    queryKey,
  })
}
