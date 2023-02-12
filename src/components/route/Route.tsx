import { useContext } from 'react';
import NavigationContext from '../../context/navigation';

type PropsT = {
  path: String;
  children: React.ReactNode;
};

const Route: React.FC<PropsT> = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return <>{children}</>;
  }

  return null;
};

export default Route;
