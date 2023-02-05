import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import s from './index.module.scss';

const StyledLink: IFC<{ to: string; [key: string]: any }> = (props) => {
  const { to, children, className, ...other } = props;

  return (
    <Link className={clsx(s.link, className && className)} to={to} {...other}>
      {children}
    </Link>
  );
};

export default StyledLink;
