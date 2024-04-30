import { connect } from 'react-redux';
import { curry } from 'ramda';
import RequiresPermissionComponent from './requires-permission';
import { RootState } from '@/redux/root-reducer';

function needsAuthorization(
  NotPermittedComponent: React.ComponentType,
  selector: (state: RootState) => boolean,
  PermittedComponent: React.ComponentType
) {
  const mapStateToProps = (state: RootState) => ({
    NotPermittedComponent,
    PermittedComponent,
    hasPermission: selector(state)
  });

  return connect(mapStateToProps)(RequiresPermissionComponent);
}

export default curry(needsAuthorization);
