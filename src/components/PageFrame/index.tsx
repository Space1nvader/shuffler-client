import React from 'react';
import clsx from 'clsx';
import PapperFrame from 'components/PapperFrame';
import { IFC } from 'types';
import DisciplinesMenu from './components/DisciplinesMenu';
import s from './index.module.scss';

const PageFrame: IFC<{ [key: string]: unknown }> = (props) => {
  const { children, className, ...other } = props;

  return (
    <div className={clsx(s.screen, className && className)}>
      <div className={s.container}>
        <DisciplinesMenu />
        <PapperFrame className={s.frame} {...other}>
          <div className={s.scrolling}>{children}</div>
        </PapperFrame>
      </div>
    </div>
  );
};

export default PageFrame;
