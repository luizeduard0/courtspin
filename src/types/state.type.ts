import { InitialAuthState } from "./auth/index.type"
import { InitialSessionState } from "./sessions/index.type"

export declare type StateType = {
  auth: InitialAuthState,
  sessions: InitialSessionState
}