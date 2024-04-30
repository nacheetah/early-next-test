import { call, put, takeEvery } from 'redux-saga/effects';
import { shouldStartLoading, shouldStopLoading } from './app-loader.reducer';
import { getCurrentUserProfile } from '../user-profile/user-profile-saga';

function* handleAppLoading() {
  yield call(getCurrentUserProfile);
  yield put(shouldStopLoading());
}

function* watchAppLoading() {
  yield takeEvery(shouldStartLoading().type, handleAppLoading);
}

// Exported the handler to write tests for it later.
export { handleAppLoading, watchAppLoading };
