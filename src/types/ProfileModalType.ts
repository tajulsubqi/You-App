import { SessionType } from "./SessionType"

export type ProfileModalType = {
  session: SessionType
  toggleModal: () => void
  isOpen: boolean
}
