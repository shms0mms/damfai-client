import shopService from "@/services/shop.service"

export default async function Shop() {
  const extensions = await shopService.getExtensions()
  const themes = await shopService.getExtensions()
  const merch = await shopService.getMockMerch()

  return <></>
}
