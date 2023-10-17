import { Session } from "@/models/session";
import { InitialSessionState } from "@/types/inbox/index.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  sessions: [],
} as InitialSessionState;

const sessionSlice = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    requestInbox: (
      state
    ) => {
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    },
    requestInboxSuccess: (
      state,
      { payload: sessions }: PayloadAction<Session[]>
    ) => {
      return {
        ...state,
        sessions: sessions,
        isLoading: false,
        error: undefined,
      };
    },
    requestInboxError: (
      state,
      { payload: error }: PayloadAction<any>
    ) => {
      return {
        ...state,
        isLoading: false,
        error,
      };
    },
  },
});

export const {
  requestInbox,
  requestInboxSuccess,
  requestInboxError,
} = sessionSlice.actions;

export default sessionSlice.reducer;
