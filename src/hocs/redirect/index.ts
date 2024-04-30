import {
  isUserLoggedIn,
  isUserLoggedOut
} from '@/features/app-loader/app-loader.reducer';
import redirect from './withRedirect';

export const redirectIfUserIsLoggedIn = redirect(isUserLoggedIn);
export const redirectIfUserIsLoggedOut = redirect(isUserLoggedOut);
