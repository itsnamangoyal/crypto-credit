import { useEffect, useMemo, useRef } from "react"
import { ZenObservable } from "zen-observable-ts"
import { useQuery, useQueryClient } from "react-query"

import { subscribeToken } from "services/indexer/query"
import { token, tokenRequest, token_bool_exp } from "services/indexer/genql"

interface UseUserTokensParams {
  where?: token_bool_exp
  fields: tokenRequest
  enabled?: boolean
  limit?: number
}

export function useTokens(params: UseUserTokensParams) {
  const subscriptionRef = useRef<undefined | ZenObservable.Subscription>()
  const queryClient = useQueryClient()

  const queryKey = useMemo(() => {
    return ["token", params.where, params.limit]
  }, [params])

  useEffect(() => {
    if (params.enabled === false) {
      return
    }

    subscriptionRef.current = subscribeToken({
      where: params.where,
      limit: params.limit,
      fields: params.fields,
      next(tokens) {
        queryClient.setQueryData(queryKey, tokens)
      },
    })

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe()
        subscriptionRef.current = undefined
      }
    }
  }, [queryKey, params, queryClient])

  return useQuery<token[] | undefined>({
    queryKey,
  })
}
