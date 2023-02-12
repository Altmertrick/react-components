import classNames from 'classnames';
import useNavigation from '../../hooks/use-navigation';

type PropsT = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

//Purpose of Link comp is to prevent normal browser behavior(reloading page)
//when clicking on <a>
const Link: React.FC<PropsT> = ({ to, children, className }) => {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //if user holds commandKey (e.metaKey) ro ctrlKey
    // we shouldn't prevent browser default behavior (open new tab)
    if (e.altKey || e.metaKey) return;

    e.preventDefault();
    //updating current path
    navigate(to);
  };

  const classes = classNames('text-blue-500', className);

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
