import React from 'react';
import Player from './components/Player';
import s from './index.module.scss';

const ladder = [
  {
    id: 1,
    name: 'name',
    score: 11111
  }
];

const Statistic = () => (
  <div className={s.statistic}>
    <div className={s.frame}>
      <h3 className={s.title}>Статистика</h3>
      <div className={s.list}>
        {ladder.map((player) => (
          <Player key={player.id} {...player} />
        ))}
      </div>
    </div>
  </div>
);

export default Statistic;
