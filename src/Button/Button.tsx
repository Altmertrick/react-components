import classNames from 'classnames';
import { ReactNode } from 'react';

type ButtonTypeT = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

type PropsT = {
  children: string | ReactNode;
  type: ButtonTypeT;
  outlined?: boolean;
  rounded?: boolean;
};

const Button: React.FC<PropsT> = ({ children, type, rounded, outlined }) => {
  const typeMap = {
    primary: 'border-blue-600 bg-blue-500 text-white',
    secondary: 'border-gray-900 bg-gray-900 text-white',
    success: 'border-green-600 bg-green-500 text-white',
    warning: 'border-yellow-600 bg-yellow-500 text-white',
    danger: 'border-red-600 bg-red-500 text-white',
  };
  const colorsMap = {
    primary: 'blue',
    secondary: 'gray',
    success: 'green',
    warning: 'yellow',
    danger: 'red',
  };

  const classes = classNames(
    'flex items-center px-3 py-1.5 border',
    typeMap[type],
    {
      'rounded-full': rounded,
      [`bg-white text-${colorsMap[type]}-500`]: outlined,
    }
  );

  return <button className={classes}>{children}</button>;
};

export default Button;

//css properties to search in tailwind
//padding
//border-width
//border-color
//background-color
//text-color
