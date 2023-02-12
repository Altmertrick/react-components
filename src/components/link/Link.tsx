import { useContext } from 'react';
import NavigationContext from '../../context/navigation';

//Purpose of Link comp is to prevent normal browser behavior(reloading page)
//when clicking on <a>
const Link: React.FC<any> = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    //updating current path
    navigate(to);
  };
  return (
    <a href={to} onClick={(e) => {}}>
      {children}
    </a>
  );
};
