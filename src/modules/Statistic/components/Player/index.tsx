import React from 'react';
import { IPlayer } from 'api/ladder';
import PlayerLink from 'components/PlayerLink';
import s from './index.module.scss';

const Player: React.FC<IPlayer> = (props) => {
  const { name, id, score } = props;

  return (
    <PlayerLink id={id} className={s.player}>
      <div className={s.content}>
        <span className={s.name}>{name}</span> <span className={s.score}>{score}</span>
      </div>
    </PlayerLink>
  );
};

export default Player;
