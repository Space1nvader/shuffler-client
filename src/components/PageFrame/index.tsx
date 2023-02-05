import React from 'react';
import clsx from 'clsx';
import PageTitle from 'components/PageTitle';
import PaperFrame from 'components/PaperFrame';
// import DisciplinesMenu from './components/DisciplinesMenu';
import s from './index.module.scss';

const PageFrame: IFC<{ title?: string; withBackButton?: boolean }> = (props) => {
  const { children, className, title, withBackButton, ...other } = props;

  return (
    <div className={clsx(s.screen, className && className)}>
      {/* Выбор дисциплин стал неактуальным, но может вернуться в будущем */}
      {/* <DisciplinesMenu /> */}
      <PaperFrame className={s.frame} {...other}>
        <PageTitle withBackButton={withBackButton} className={s.title}>
          {title}
        </PageTitle>

        {children}
      </PaperFrame>
    </div>
  );
};

export default PageFrame;
