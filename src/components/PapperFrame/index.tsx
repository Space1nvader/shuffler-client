import React from 'react';
import clsx from 'clsx';
import { IFC } from 'types';
import s from './index.module.scss';

const PapperFrame: IFC<{ [key: string]: unknown }> = (props) => {
  const { children, className, ...other } = props;

  return (
    <div className={clsx(s.frame, className && className)} {...other}>
      {children}
    </div>
  );
};

export default PapperFrame;
