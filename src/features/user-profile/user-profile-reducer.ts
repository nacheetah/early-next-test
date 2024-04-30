import { complement, compose, isNil, prop } from 'ramda';
import { type AnyAction } from 'redux-saga';
import { RootState } from '../../redux/root-reducer';

export const slice = 'userProfile';
export const initialState: Record<string, any> = {
  user: null
};

export function reducer(
  state: Record<string, any> = initialState,
  { type, payload }: AnyAction
) {
  switch (type) {
    case updateUserProfile().type:
      return { ...state, user: payload ? { ...payload } : null };

    default:
      return state;
  }
}

/*
 * Action creators!
 */

export const updateUserProfile = (payload?: Record<string, any>) => ({
  type: `${slice}/update`,
  payload: payload || null // I like to be explicit
});

/*
 * Selectors!
 */
export const getUserProfileSlice = (state: RootState) => state[slice];

// Takes in state and returns true if there is a valid user object, else returns false
export const isUserProfileLoaded = compose(
  complement(isNil),
  prop('user'),
  getUserProfileSlice
);
