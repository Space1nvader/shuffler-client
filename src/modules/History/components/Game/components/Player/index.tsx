import React from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import { IPlayer } from 'api/ladder';
import PlayerLink from 'components/PlayerLink';
import PlayerScoreDiff from '../PlayerScoreDiff';
import s from './index.module.scss';

interface IHisotryPlayerProps extends IPlayer {
  change: number;
}

const Player = (props: IHisotryPlayerProps) => {
  const { id: playerId, name, change, score } = props;
  const { id } = useParams();

  const isCurrent = Number(id) === playerId;

  return (
    <>
      <PlayerLink id={playerId} className={clsx(s.player, isCurrent && s.current)}>
        {name}
      </PlayerLink>
      {isCurrent && <PlayerScoreDiff change={change} score={score} />}
    </>
  );
};

export default Player;
