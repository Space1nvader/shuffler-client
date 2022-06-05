import React from 'react';
import clsx from 'clsx';
import BackButton from 'components/BackButton';
import { IFC } from 'types';
import s from './index.module.scss';

const PageTitle: IFC<{ withBackButton?: boolean; [key: string]: unknown }> = (props) => {
  const { children, className, withBackButton, ...other } = props;

  return (
    <div className={s.header}>
      <div className={s.buttonPlace}>{withBackButton && <BackButton />}</div>
      <h4 className={clsx(s.title, className && className)} {...other}>
        {children}
      </h4>
    </div>
  );
};

export default PageTitle;
