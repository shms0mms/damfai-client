"use client"

import {
  DefaultError,
  QueryKey,
  UseQueryOptions,
  useQuery
} from "@tanstack/react-query"

const useLazyQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: string[],
  queryFn: () => void,
  options?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
) => {
  const { refetch, ...props } = useQuery<
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >({
    queryKey,
    queryFn,
    enabled: false,
    ...options
  })

  const query = async () => {
    await refetch()
  }

  return { query, ...props }
}

export default useLazyQuery
