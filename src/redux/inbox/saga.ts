import ApiService from "@/utils/api.service";
import { AxiosError } from "axios";
import { all, fork, put, takeLatest } from "redux-saga/effects";
import { requestInbox, requestInboxError, requestInboxSuccess } from "./action-reducer";
import { Session } from "@/models/session";

function* getInbox() {
  try {
      const response: Session[] = yield ApiService.callGet('/inbox', {}, {
          'Skip-Headers': true
      });
      yield put(requestInboxSuccess(response));
  } catch (error: AxiosError | any) {
      yield put(requestInboxError(error?.response?.data || {code: '400', description: 'Something went wrong'}));
  }
}

export function* watchRequestInbox() {
  yield takeLatest(requestInbox.type, getInbox);
}

export default function* rootSaga() {
  yield all([
      fork(watchRequestInbox),
  ]);
}