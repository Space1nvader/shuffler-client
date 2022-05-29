import React from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import { IPlayer } from 'api/ladder';
import PlayerLink from 'components/PlayerLink';
import s from './index.module.scss';

const Player = (props: IPlayer) => {
  const { id: playerId, name } = props;
  const { id } = useParams();

  const isCurrent = Number(id) === playerId;

  return (
    <PlayerLink id={playerId} className={clsx(s.player, isCurrent && s.current)}>
      {name}
    </PlayerLink>
  );
};

export default Player;
