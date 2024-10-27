import { ChappiPass } from "@/components/pass"

export default function ChappiPassPage({
  searchParams
}: {
  searchParams: { type: string }
}) {
  return <ChappiPass searchParams={searchParams} />
}
