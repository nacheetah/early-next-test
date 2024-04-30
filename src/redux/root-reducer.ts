import { combineReducers } from '@reduxjs/toolkit';
import {
  reducer as userProfileReducer,
  slice as userProfileSlice
} from '../features/user-profile/user-profile-reducer';
import {
  reducer as appLoaderReducer,
  slice as appLoaderSlice
} from '../features/app-loader/app-loader.reducer';

export const rootReducer = combineReducers({
  [userProfileSlice]: userProfileReducer,
  [appLoaderSlice]: appLoaderReducer
});

export const rootState = rootReducer(undefined, { type: '' });

export type RootState = ReturnType<typeof rootReducer>;
