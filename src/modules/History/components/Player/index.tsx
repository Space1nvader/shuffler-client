import React from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import { IPlayer } from 'api/ladder';
import s from './index.module.scss';

const Player = (props: IPlayer) => {
  const { id: playerId, name } = props;
  const { id } = useParams();
  console.log(Number(id), playerId);

  const isCurrent = Number(id) === playerId;
  console.log(isCurrent);

  return <div className={clsx(s.player, isCurrent && s.current)}>{name}</div>;
};

export default Player;
