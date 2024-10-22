import { EditProfile } from "@/components/dashboard/profile/edit"
import { Modal } from "@/components/modal"

export default function SettingsPage() {
  return (
    <Modal
      title="Настройки"
      description="Внесите изменения в свой профиль здесь. Когда закончите, нажмите
        сохранить."
    >
      <EditProfile />
    </Modal>
  )
}
