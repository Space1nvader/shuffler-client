import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import ArrowIcon from 'components/Icons/ArrowIcon';
import { IFC } from 'types';
import s from './index.module.scss';

const BackButton: IFC = ({ className = '' }) => (
  <Link to="/" title="Вернуться назад" className={clsx(s.button, className && className)}>
    <ArrowIcon />
  </Link>
);

export default BackButton;
