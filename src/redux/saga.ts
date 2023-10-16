import {all} from "@redux-saga/core/effects";
import authSagas from './auth/saga';
import sessionSagas from './sessions/saga';

export default function* rootSaga() {
    yield all([
      authSagas(),
      sessionSagas()
    ]);
}
