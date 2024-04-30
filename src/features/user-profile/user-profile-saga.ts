import { call, put, select } from 'redux-saga/effects';
import { fetchCurrentUserProfile } from './fetch-user-profile.service';
import {
  getUserCredential,
  setErrorState,
  shouldStopLoading
} from '../app-loader/app-loader.reducer';
import { updateUserProfile } from './user-profile-reducer';

export function* getCurrentUserProfile() {
  try {
    // Set error to null before endpoint is called
    yield put(setErrorState());
    const credential: string = yield select(getUserCredential);
    const userProfile: Record<string, any> = yield call(
      fetchCurrentUserProfile.bind(null, credential)
    );

    if (userProfile) {
      yield put(updateUserProfile(userProfile?.[0]));
    }
  } catch (error) {
    // Set error to error of api call fails
    yield put(setErrorState(error as string));
  } finally {
    // Stop loading whether api call is successful or not
    yield put(shouldStopLoading());
  }
}
