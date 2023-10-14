import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (
      state,
      _action: PayloadAction<{ email: string; password: string }>
    ) => {
      return { ...state, user: undefined, error: null, isLoading: true };
    },
    loginSuccess: (state, { payload: user }: PayloadAction<{}>) => {
      return { ...state, user, error: null, isLoading: false };
    },
    loginError: (state, { payload: error }: PayloadAction<any>) => {
      return { ...state, user: undefined, error, isLoading: false };
    },
  },
});

export const { loginUser } = authSlice.actions;
export default authSlice.reducer;
