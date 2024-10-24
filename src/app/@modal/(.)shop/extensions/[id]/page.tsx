import { Modal } from "@/components/modal"
import ThemeDetail from "@/components/shop/themes/theme-detail"
import { extensionsService } from "@/services/extensions.service"

export default async function ExtensionModalPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const extension = await extensionsService.getById(id)
  return (
    <Modal title={extension?.title} description={extension?.description}>
      <ThemeDetail extension={extension!} />
    </Modal>
  )
}
