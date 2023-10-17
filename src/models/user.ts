import { PersonType } from "./person-type";

export interface User {
  id: string;
  type: PersonType;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  avatar?: string;
  location: string;
  token?: string;
}
