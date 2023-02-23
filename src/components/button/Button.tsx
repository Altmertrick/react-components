import className from 'classnames';
import { GoSync } from 'react-icons/go';

type Styles = { primary: true } | { secondary: true } | { success: true };

interface ButtonAttributesT
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

interface BtnCustomPropsT {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface PropsT extends ButtonAttributesT, BtnCustomPropsT {}

const Button: React.FC<PropsT> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) => {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border h-8',
    {
      'opacity-70': loading,
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500 ': outline && danger,
      'bg-gray-200': rest.disabled,
    }
  );

  return (
    <button disabled={loading} {...rest} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};
export default Button;
// import classNames from 'classnames';

// interface ButtonAttributesT
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

// type ButtonStyleT = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// interface BtnCustomPropsT {
//   styleType?: ButtonStyleT;

//   outlined?: boolean;
//   rounded?: boolean;
//   className?: string;
//   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

// interface PropsT extends ButtonAttributesT, BtnCustomPropsT {}

// const Button: React.FC<PropsT> = ({
//   children,
//   styleType = 'primary',
//   rounded,
//   outlined,
//   ...rest
// }) => {
//   const typeMap = {
//     primary: 'border-blue-600 bg-blue-500 text-white',
//     secondary: 'border-gray-900 bg-gray-900 text-white',
//     success: 'border-green-600 bg-green-500 text-white',
//     warning: 'border-yellow-600 bg-yellow-500 text-white',
//     danger: 'border-red-600 bg-red-500 text-white',
//   };
//   const colorsMap = {
//     primary: 'blue',
//     secondary: 'gray',
//     success: 'green',
//     warning: 'yellow',
//     danger: 'red',
//   };

//   const color = colorsMap[styleType];

//   const classes = classNames(
//     'flex items-center px-3 py-1.5 border',
//     typeMap[styleType],
//     {
//       'rounded-full': rounded,
//     },
//     {
//       [`bg-white text-${color}-500`]: outlined,
//     },
//     rest.className
//   );

//   return (
//     <button {...rest} className={classes}>
//       {children}
//     </button>
//   );
// };

// export default Button;

// //css properties to search in tailwind
// //padding
// //border-width
// //border-color
// //background-color
// //text-color
