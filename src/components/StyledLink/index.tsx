import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { IFC } from 'types';
import s from './index.module.scss';

const StyledLink: IFC<{ to: string }> = (props) => {
  const { to, children, className } = props;

  return (
    <Link className={clsx(s.link, className && className)} to={to}>
      {children}
    </Link>
  );
};

export default StyledLink;
