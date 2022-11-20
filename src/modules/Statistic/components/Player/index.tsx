import React from 'react';
import { IPlayer } from 'api/ladder';
import Avatar from 'components/Avatar';
import PlayerLink from 'components/PlayerLink';
import s from './index.module.scss';

const Player: React.FC<IPlayer> = (props) => {
  const { name, id, avatar, score } = props;

  return (
    <PlayerLink id={id} className={s.player}>
      <div className={s.content}>
        <span className={s.user}>
          <Avatar src={avatar} className={s.avatar} /> {name}
        </span>
        <span className={s.score}>{score || 'Калибровка'}</span>
      </div>
    </PlayerLink>
  );
};

export default Player;
