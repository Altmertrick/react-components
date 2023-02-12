import { useContext } from 'react';
import NavigationContext from '../../context/navigation';
import classNames from 'classnames';

//Purpose of Link comp is to prevent normal browser behavior(reloading page)
//when clicking on <a>
const Link: React.FC<any> = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //if user holds commandKey (e.metaKey) ro ctrlKey
    // we shouldn't prevent browser default behavior (open new tab)
    console.log(e);
    if (e.altKey || e.metaKey) return;

    e.preventDefault();

    //updating current path
    navigate(to);
  };

  const classes = classNames('text-blue-500');

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
