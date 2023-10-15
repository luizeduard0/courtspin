import { User } from "@/models/user"

export declare type InitialAuthState = {
  user?: User | undefined | null,
  isLoading?: boolean
  error?: Error | any | null,
}