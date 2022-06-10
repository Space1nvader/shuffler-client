import React from 'react';
import clsx from 'clsx';
import { IFC } from 'types';
import s from './index.module.scss';

const Messege: IFC = (props) => {
  const { children, className } = props;

  return <div className={clsx(s.messege, className && className)}>{children}</div>;
};

export default Messege;
