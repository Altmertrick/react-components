import classNames from 'classnames';

interface PropsT extends React.ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Panel: React.FC<PropsT> = ({ children, className, ...rest }) => {
  const classes = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
