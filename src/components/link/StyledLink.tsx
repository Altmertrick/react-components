import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

type PropsT = {
  to: string;
  children: React.ReactNode;
  className?: string;
  classNameActive?: string;
};

const StyledLink: React.FC<PropsT> = ({
  to,
  children,
  className,
  classNameActive,
}) => {
  const { pathname } = useLocation();

  const classes = classNames(
    'text-blue-500',
    className,
    to === pathname && classNameActive
  );

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
};

export default StyledLink;
