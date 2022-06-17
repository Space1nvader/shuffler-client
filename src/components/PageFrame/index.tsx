import React from 'react';
import clsx from 'clsx';
import PageTitle from 'components/PageTitle';
import PapperFrame from 'components/PapperFrame';
import { IFC } from 'types';
import DisciplinesMenu from './components/DisciplinesMenu';
import s from './index.module.scss';

const PageFrame: IFC<{ title?: string; withBackButton?: boolean; [key: string]: unknown }> = (
  props
) => {
  const { children, className, title, withBackButton, ...other } = props;

  return (
    <div className={clsx(s.screen, className && className)}>
      <div className={s.container}>
        <DisciplinesMenu />
        <PapperFrame className={s.frame} {...other}>
          <PageTitle withBackButton={withBackButton} className={s.title}>
            {title}
          </PageTitle>
          <div className={s.scroll}>{children}</div>
        </PapperFrame>
      </div>
    </div>
  );
};

export default PageFrame;
