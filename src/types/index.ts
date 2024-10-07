export type Pagination<TItem = undefined> = (TItem extends undefined
  ? {}
  : {
      items: TItem[]
    }) & {
  page: number
  total: number
  pages: number
  size: number
}

export type RecordOf<T> = Record<string, T>
