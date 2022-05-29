import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { IFC } from 'types';
import s from './index.module.scss';

interface IPlayerLinkProps {
  id: number | string;
}
const PlayerLink: IFC<IPlayerLinkProps> = (props) => {
  const { id, className, children } = props;

  return (
    <Link
      to={`/${id}`}
      title="Просмотреть историю игрока"
      className={clsx(s.player, className && className)}
    >
      {children}
    </Link>
  );
};

export default PlayerLink;
