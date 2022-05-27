import { useEffect, useMemo, useRef } from "react"
import { ZenObservable } from "zen-observable-ts"
import { useQuery, useQueryClient } from "react-query"

import { subscribeListing } from "services/indexer/query"
import {
  listing,
  listingRequest,
  listing_bool_exp,
} from "services/indexer/genql"

interface UseListingParams {
  where?: listing_bool_exp
  limit?: number
  fields: listingRequest
  enabled?: boolean
}

export function useListings(params: UseListingParams) {
  const subscriptionRef = useRef<undefined | ZenObservable.Subscription>()
  const queryClient = useQueryClient()

  const queryKey = useMemo(() => {
    return ["listing", params.where, params.limit]
  }, [params])

  useEffect(() => {
    if (params.enabled === false) {
      return
    }

    subscriptionRef.current = subscribeListing({
      limit: params.limit,
      where: params.where,
      fields: params.fields,
      next(listings) {
        queryClient.setQueryData(queryKey, listings)
      },
    })

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe()
        subscriptionRef.current = undefined
      }
    }
  }, [queryKey, params, queryClient])

  return useQuery<listing[] | undefined>({
    queryKey,
  })
}
