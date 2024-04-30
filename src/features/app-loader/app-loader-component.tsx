import { useEffect } from 'react';
import { shouldStartLoading, slice } from './app-loader.reducer';
import { connect } from 'react-redux';
import { RootState } from '@/redux/root-reducer';

const mapDispatchToProps = {
  onFetchUser: shouldStartLoading
};

const mapStateToProps = (state: RootState) => ({
  userCredential: state[slice].userCredential
});

export function AppLoader({
  onFetchUser,
  loadingMessage,
  userCredential
}: any) {
  useEffect(() => {
    if (userCredential) onFetchUser();
  }, [onFetchUser, userCredential]);
  return (
    <>
      <div>{loadingMessage || 'loading'}</div>
    </>
  );
}

export const LoadingComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLoader);
