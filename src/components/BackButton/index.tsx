import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router';

import ArrowIcon from 'components/Icons/ArrowIcon';
import { IFC } from 'types';
import s from './index.module.scss';

const BackButton: IFC = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate('/ladder')}
      title="Вернуться назад"
      className={clsx(s.button, className && className)}
    >
      <ArrowIcon />
    </button>
  );
};

export default BackButton;
