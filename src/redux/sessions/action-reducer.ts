import { Session } from "@/models/session";
import { InitialWizardState } from "@/types/props-types/wizard-state.type";
import { InitialSessionState } from "@/types/sessions/index.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  draft: {},
  sessions: [],
  selectedSession: {}
} as InitialSessionState;

const sessionSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {
    loadSessionRequest: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        selectedSession: undefined,
        error: null,
        isLoading: true
      }
    },
    loadSessionSuccess: (state, { payload: session }: PayloadAction<Session>) => {
      return {
        ...state,
        selectedSession: session,
        error: null,
        isLoading: false
      }
    },
    loadSessionError: (state, { payload: error }: PayloadAction<any>) => {
      return {
        ...state,
        selectedSession: undefined,
        error: error,
        isLoading: false
      }
    },
    updateSessionDraftState: (state, { payload: session }: PayloadAction<InitialWizardState>) => {
      return {
        ...state,
        draft: session,
        error: null,
        isLoading: false
      }
    },
    requestSession: (state, {payload: session}: PayloadAction<InitialWizardState>) => {
      return {
        ...state,
        draft: session,
        isLoading: true,
        error: null
      }
    },
    requestSessionSuccess: (state, {payload: session}: PayloadAction<Session>) => {
      return {
        ...state,
        draft: {},
        selectedSession: session,
        isLoading: false,
        error: null
      }
    },
    requestSessionError: (state, {payload: error}: PayloadAction<any>) => {
      return {
        ...state,
        isLoading: false,
        error
      }
    },
  },
});

export const {
  loadSessionRequest,
  loadSessionSuccess,
  loadSessionError,
  updateSessionDraftState,
  requestSession,
  requestSessionSuccess,
  requestSessionError
} = sessionSlice.actions

export default sessionSlice.reducer