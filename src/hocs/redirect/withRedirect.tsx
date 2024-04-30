import { RootState } from '../../redux/root-reducer';
import { ConnectedProps, connect } from 'react-redux';
import { PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import { curry } from 'ramda';

function redirect(predicate: (state: RootState) => boolean, path: string) {
  const mapStateToProps = (
    state: RootState
  ): { canRedirect: boolean } & Record<string, any> => ({
    canRedirect: predicate(state)
  });

  const connector = connect(mapStateToProps);

  return function <A>(Component: React.ComponentType<Omit<A, 'canRedirect'>>) {
    function RedirectComponent({
      canRedirect,
      ...props
    }: PropsWithChildren<
      A & ConnectedProps<typeof connector>
    >): React.JSX.Element {
      const router = useRouter();
      useEffect(() => {
        console.log(path, 'yooooo');
        if (canRedirect) {
          router.push(path);
        }
      }, [router, canRedirect]);
      return <Component {...props} />;
    }

    return connector(RedirectComponent);
  };
}

export default curry(redirect);
