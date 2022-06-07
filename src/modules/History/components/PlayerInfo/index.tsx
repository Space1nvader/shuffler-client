import React from 'react';
import clsx from 'clsx';
import Avatar from 'components/Avatar';
import { IFC } from 'types';
import s from './index.module.scss';

const PlayerInfo: IFC<{ id: number | string }> = (props) => {
  const { id } = props;

  const data = {
    nickname: ` Никнейм игрока ${id}`,
    score: 1435,
    wins: 50,
    looses: 40,
    avatar: undefined
  };
  const winrate = 100 - ((data.wins + data.looses) / 100) * data.wins;

  return (
    <div className={s.info}>
      <div className={s.header}>
        {!data.avatar ? <Avatar className={s.avatar} /> : 'avatar'}
        <h5 className={s.title}>{data.nickname}</h5>
      </div>
      <div className={s.stats}>
        <div className={s.score}>Счет: {data.score}</div>
        <div className={s.played}>
          <span className={clsx(s.games, s.wins)}>W: {data.wins}</span>
          <span className={clsx(s.games, s.looses)}>L: {data.looses}</span>
          <div className={s.winrate}>Winrate: {winrate}%</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
