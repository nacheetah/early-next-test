import withLoading from '@/hocs/withLoading';
import UserProfile from './user-profile-component';
import { compose } from 'ramda';
import { redirectIfUserIsLoggedOut } from '@/hocs/redirect';
export default compose(
  redirectIfUserIsLoggedOut('/sign-in'),
  withLoading
)(UserProfile);
