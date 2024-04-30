import { complement, compose, isNil, prop } from 'ramda';
import { type AnyAction } from 'redux-saga';
import { RootState } from '../../redux/root-reducer';

export const initialState = {
  loading: true,
  error: '',
  userCredential: undefined
};
export const slice = 'appLoader';

export const reducer = (
  state: Record<string, any> = initialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case shouldStartLoading().type:
    case shouldStopLoading().type:
      return { ...state, loading: payload };
    case setErrorState().type:
      return { ...state, error: payload };
    case setUserCredential().type:
      return { ...state, userCredential: payload };

    default:
      return state;
  }
};

/*
 * Action creators!
 */

export const shouldStartLoading = () => ({
  type: `${slice}/shouldStartLoading`,
  payload: true
});

export const shouldStopLoading = () => ({
  type: `${slice}/shouldStopLoading`,
  payload: false
});

export const setErrorState = (payload?: string) => ({
  type: `${slice}/shouldSetErrorState`,
  payload
});

export const setUserCredential = (payload?: string) => ({
  type: `${slice}/shouldSetUserCredential`,
  payload
});

/*
 * Selectors!
 */

export const getAppLoaderSlice = (state: RootState) => state[slice];

export const hasError = compose(
  complement(isNil),
  prop('error'),
  getAppLoaderSlice
);

export const isLoading = compose(prop('loading'), getAppLoaderSlice);

export const getUserCredential = compose(
  prop('userCredential'),
  getAppLoaderSlice
);

// Takes in state and returns true if there is a valid user object, else returns false
export const isUserLoggedOut = compose(isNil, getUserCredential);

export const isUserLoggedIn = (state: RootState) => !isUserLoggedOut(state);
