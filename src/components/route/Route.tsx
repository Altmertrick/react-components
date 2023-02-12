import useNavigation from '../../hooks/use-navigation';

type PropsT = {
  path: String;
  children: React.ReactNode;
};

const Route: React.FC<PropsT> = ({ path, children }) => {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return <>{children}</>;
  }

  return null;
};

export default Route;
