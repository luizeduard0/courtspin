import { PersonType } from "./person-type";

export interface Person {
  id: string;
  type: PersonType;
  first_name: string;
  last_name: string;
  gender: string;
  zipcode: string;
}
