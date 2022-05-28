import React from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router';
import BackButton from 'components/BackButton';
import { IFC } from 'types';
import s from './index.module.scss';

const PageTitle: IFC<{ [key: string]: unknown }> = (props) => {
  const { children, className, ...other } = props;
  const { pathname } = useLocation();
  const isNotRoot = pathname !== '/';

  return (
    <div className={s.header}>
      <div className={s.buttonPlace}>{isNotRoot && <BackButton />}</div>
      <h4 className={clsx(s.title, className && className)} {...other}>
        {children}
      </h4>
    </div>
  );
};

export default PageTitle;
