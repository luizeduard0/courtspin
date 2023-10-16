import { InitialWizardState } from "@/types/props-types/wizard-state.type";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { loadSessionError, loadSessionRequest, loadSessionSuccess, requestJoinSession, requestSession, requestSessionError, requestSessionSuccess } from "./action-reducer";
import { all, fork, put, takeLatest } from "redux-saga/effects";
import ApiService from "@/utils/api.service";
import { Session } from "@/models/session";

function* loadSession({ payload: sessionId }: PayloadAction<Session>) {
  try {
    const response: Session = yield ApiService.callGet(`sessions/${sessionId}`, {})
    yield put(loadSessionSuccess(response))
  } catch (error: AxiosError | any) {
    yield put(loadSessionError(error?.response?.data) || {
      code: 400,
      description: 'Seomthing went wrong'
    })
  }
}

function* addSession({ payload }: PayloadAction<InitialWizardState>) {
  try {
    const response: Session = yield ApiService.callPost('sessions', payload)
    yield put(requestSessionSuccess(response))
  } catch (error: AxiosError | any) {
    yield put(requestSessionError(error?.response?.data) || {
      code: 400,
      description: 'Seomthing went wrong'
    })
  }
}

function* joinSession({ payload: sessionId }: PayloadAction<{sessionId: string}>) {
  try {
    const response: Session = yield ApiService.callPost(`sessions/${sessionId}/join`, {})
    yield put(requestSessionSuccess(response))
  } catch (error: AxiosError | any) {
    yield put(requestSessionError(error?.response?.data) || {
      code: 400,
      description: 'Seomthing went wrong'
    })
  }
}

export function* watchLoadSession() {
  yield takeLatest(loadSessionRequest.type, loadSession)
}

export function* watchAddSession() {
  yield takeLatest(requestSession.type, addSession)
}

export function* watchJoinSession() {
  yield takeLatest(requestJoinSession.type, joinSession)
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadSession),
    fork(watchAddSession),
    fork(watchJoinSession),
  ])
}