import { MODALITY, PLAYER_TYPE, STATUS, TYPE } from "@/utils/constants";

export interface SessionUserProp {
  id: number;
  firstName: string;
  lastName: string;
  avatar?: string;
  ntrp: string;
}

export interface SessionUser {
  isWinner: boolean;
  userType: PLAYER_TYPE;
  user: SessionUserProp;
}

export interface Session {
  id: string;
  modality: MODALITY;
  sessionType: TYPE;
  status: STATUS;
  location: string;
  start: string;
  end: string;
  sessionUser: SessionUser[];
}
