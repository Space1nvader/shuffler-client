import React from 'react';
import clsx from 'clsx';
import PapperFrame from 'components/PapperFrame';
import { IFC } from 'types';
import s from './index.module.scss';

const PageFrame: IFC<{ [key: string]: unknown }> = (props) => {
  const { children, className, ...other } = props;

  return (
    <div className={clsx(s.screen, className && className)}>
      <PapperFrame className={s.frame} {...other}>
        {children}
      </PapperFrame>
    </div>
  );
};

export default PageFrame;
