import { useEffect, useMemo, useRef } from "react"
import { ZenObservable } from "zen-observable-ts"
import { useQuery, useQueryClient } from "react-query"

import { subscribeOffer } from "services/indexer/query"
import { offer, offerRequest, offer_bool_exp } from "services/indexer/genql"

interface UseofferParams {
  where?: offer_bool_exp
  limit?: number
  fields: offerRequest
  enabled?: boolean
}

export function useOffers(params: UseofferParams) {
  const subscriptionRef = useRef<undefined | ZenObservable.Subscription>()
  const queryClient = useQueryClient()

  const queryKey = useMemo(() => {
    return ["offer", params.where, params.limit]
  }, [params])

  useEffect(() => {
    if (params.enabled === false) {
      return
    }

    subscriptionRef.current = subscribeOffer({
      limit: params.limit,
      where: params.where,
      fields: params.fields,
      next(offers) {
        queryClient.setQueryData(queryKey, offers)
      },
    })

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe()
        subscriptionRef.current = undefined
      }
    }
  }, [queryKey, params, queryClient])

  return useQuery<offer[] | undefined>({
    queryKey,
  })
}
