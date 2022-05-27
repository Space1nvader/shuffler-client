import React, { useEffect } from 'react';
import Player from './components/Player';
import s from './index.module.scss';
import { ladderStore } from './store';

const Statistic = () => {
  const { data, loading } = ladderStore.getStore('ladder');
  useEffect(() => {
    ladderStore.getLadderAction();
  }, []);

  return (
    <div className={s.statistic}>
      <div className={s.frame}>
        <h3 className={s.title}>Статистика</h3>
        <div className={s.list}>
          {data.map((player) => (
            <Player key={player.id} {...player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
