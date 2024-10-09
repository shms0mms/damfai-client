import {
  type DefaultError,
  type QueryFunction,
  type QueryKey,
  type UseQueryOptions,
  useQuery
} from "@tanstack/react-query"

export const useLazyQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey, never>,
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
