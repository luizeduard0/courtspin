import { Session } from "@/models/session"

export declare type InitialInboxState = {
  isLoading: boolean,
  error: null | any,
  sessions: Session[] | []
}