import { redirectIfUserIsLoggedIn } from '@/hocs/redirect';
import { SignInComponent } from './sign-in-component';
import { connect } from 'react-redux';
import { setUserCredential, slice } from '../app-loader/app-loader.reducer';
import { RootState } from '@/redux/root-reducer';

const mapDispatchToProps = { login: setUserCredential };
const mapStateToProps = (state: RootState) => ({
  userCredential: state[slice].userCredential
});

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComponent);

export default redirectIfUserIsLoggedIn('/user-profile')(connectedComponent);
