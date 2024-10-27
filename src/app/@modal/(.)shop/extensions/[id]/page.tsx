import { Modal } from "@/components/modal"
import { ExtensionDetail } from "@/components/shop/extensions/extension-detail"
import { extensionsService } from "@/services/extensions.service"

export default async function ExtensionModalPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const { data: extension } = await extensionsService.getBySlug(id)
  return (
    <Modal title={extension?.title} description={extension?.description}>
      <ExtensionDetail extension={extension!} />
    </Modal>
  )
}
