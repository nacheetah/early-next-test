import { connect } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { getUserProfileSlice, updateUserProfile } from './user-profile-reducer';
import { setUserCredential } from '../app-loader/app-loader.reducer';

const mapStateToProps = (state: RootState) => ({
  user: getUserProfileSlice(state).user
});

const mapDispatchToProps = {
  shouldRemoveCredentials: setUserCredential,
  shouldRemoveUserProfile: updateUserProfile
};

function UserProfile({
  user,
  shouldRemoveCredentials,
  shouldRemoveUserProfile
}: any) {
  function handleLogOut() {
    shouldRemoveCredentials();
    shouldRemoveUserProfile(undefined);
  }

  return (
    <>
      <div>Name: {user?.name || 'N/A'}</div>
      <div>Email: {user?.email || 'N/A'}</div>
      <div>Phone: {user?.phone || 'N/A'}</div>
      <div>Username: {user?.username || 'N/A'}</div>
      <div>Website: {user?.website || 'N/A'}</div>

      <button className='mt-4' onClick={handleLogOut}>
        log out
      </button>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
