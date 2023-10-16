import { Session } from "@/models/session"
import { InitialWizardState } from "../props-types/wizard-state.type"

export declare type InitialSessionState = {
  isLoading: boolean,
  error: null | any,
  draft: InitialWizardState | {},
  selectedSession: Session | undefined
  sessions: Session[] | []
}