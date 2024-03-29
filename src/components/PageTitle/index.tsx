import React from 'react';
import clsx from 'clsx';
import BackButton from 'components/BackButton';

import s from './index.module.scss';

const PageTitle: IFC<{ withBackButton?: boolean; [key: string]: unknown }> = (props) => {
  const { children, className, withBackButton, ...other } = props;

  return (
    <div className={clsx(s.header, className && className)}>
      <div className={s.buttonPlace}>{withBackButton && <BackButton />}</div>
      <h4 className={s.title} {...other}>
        {children}
      </h4>
    </div>
  );
};

export default PageTitle;
