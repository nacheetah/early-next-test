import { watchAppLoading } from '@/features/app-loader/app-loader-saga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([watchAppLoading()]);
}
