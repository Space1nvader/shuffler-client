import React from 'react';
import clsx from 'clsx';
import s from './index.module.scss';

export interface IButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {}

const Button: React.FC<IButtonProps> = (props) => {
  const { children, className = '', type = 'button' } = props;

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={clsx(s.button, className)}>
      {children}
    </button>
  );
};

export default Button;
