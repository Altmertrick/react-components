import classNames from 'classnames';

interface ButtonAttributesT
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

type ButtonStyleT = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

interface BtnCustomPropsT {
  styleType: ButtonStyleT;
  outlined?: boolean;
  rounded?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface PropsT extends ButtonAttributesT, BtnCustomPropsT {}

const Button: React.FC<PropsT> = ({
  children,
  styleType,
  rounded,
  outlined,
  ...rest
}) => {
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

  const color = colorsMap[styleType];

  const classes = classNames(
    'flex items-center px-3 py-1.5 border',
    typeMap[styleType],
    {
      'rounded-full': rounded,
    },
    {
      [`bg-white text-${color}-500`]: outlined,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;

//css properties to search in tailwind
//padding
//border-width
//border-color
//background-color
//text-color
