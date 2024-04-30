interface Props<A, B> {
  NotPermittedComponent: React.ComponentType<A>;
  PermittedComponent: React.ComponentType<B>;
  hasPermission: boolean;
}

export default function RequiresPermissionComponent<A, B>(
  props: Props<A, B> & A & B
) {
  const { PermittedComponent, NotPermittedComponent, hasPermission } = props;

  return hasPermission ? (
    <PermittedComponent {...props} />
  ) : (
    <NotPermittedComponent
      {...props}
      loadingMessage={'loading your profile...'}
    />
  );
}
