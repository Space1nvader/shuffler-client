import React from 'react';
import clsx from 'clsx';
import s from './index.module.scss';

const Message: IFC = (props) => {
  const { children, className } = props;

  return <div className={clsx(s.message, className && className)}>{children}</div>;
};

export default Message;
