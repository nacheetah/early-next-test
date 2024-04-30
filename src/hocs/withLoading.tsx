import { LoadingComponent as AppLoaderComponent } from '@/features/app-loader/app-loader-component';
import needsAuthorization from './requires-permission/index';
import { isUserProfileLoaded } from '@/features/user-profile/user-profile-reducer';

export default needsAuthorization(AppLoaderComponent, isUserProfileLoaded);
