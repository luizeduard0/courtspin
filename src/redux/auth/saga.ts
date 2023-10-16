import ApiService from "@/utils/api.service";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse, AxiosError } from "axios";
import { all, fork, put, takeLatest } from "@redux-saga/core/effects";
import { loginError, loginSuccess, requestRegister, requestUserLogin } from "./action-reducer";
import { setUser } from "@/utils/local-storage.service";
import { WizardStepInfoProps } from "@/types/props-types/wizard-state.type";

function* login({payload: {email, password}}: PayloadAction<{ email: string, password: string }>) {
  try {
      const response: AxiosResponse = yield ApiService.callPost('auth/login', {email, password}, {
          'Skip-Headers': true
      });
      setUser(response)
      yield put(loginSuccess(response));
  } catch (error: AxiosError | any) {
      yield put(loginError(error?.response?.data || {code: '400', description: 'Something went wrong'}));
  }
}

function* signup({ payload }: PayloadAction<WizardStepInfoProps>) {
  try {
      const response: AxiosResponse = yield ApiService.callPost('auth/signup', payload, {
          'Skip-Headers': true
      });
      setUser(response)
      yield put(loginSuccess(response));
  } catch (error: AxiosError | any) {
      yield put(loginError(error?.response?.data || {code: '400', description: 'Something went wrong'}));
  }
}

export function* watchLoginUser() {
  yield takeLatest(requestUserLogin.type, login);
}

export function* watchRegisterUser() {
  yield takeLatest(requestRegister.type, signup);
}

export default function* rootSaga() {
  yield all([
      fork(watchLoginUser),
      fork(watchRegisterUser),
  ]);
}
