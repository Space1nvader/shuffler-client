import React, { useEffect } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Avatar from 'components/Avatar';
import Loader from 'components/Loader';
import disciplineStore from 'store/disciplines';
import { IFC } from 'types';
import { playerStore } from '../../store/player';
import s from './index.module.scss';

const PlayerInfo: IFC<{ id: number | string }> = (props) => {
  const { id } = props;
  const { data, loading } = playerStore.getState();
  const { player } = data;

  const { discipline } = disciplineStore;

  useEffect(() => {
    playerStore.getPlayerAction(id);
  }, [id, discipline]);

  const games = player.winCount + player.loseCount;
  const winrate = Math.round((player.winCount / games) * 100);

  return (
    <div className={s.info}>
      {loading && (
        <div className={s.loader}>
          <Loader />
        </div>
      )}
      <div className={s.header}>
        {!player.avatar ? <Avatar className={s.avatar} /> : 'avatar'}
        <h5 className={s.title}>{player.name}</h5>
      </div>
      <div className={s.stats}>
        <div className={s.score}>Счет: {player.score}</div>
        <div className={s.played}>
          <span className={clsx(s.games, s.wins)}>W: {player.winCount}</span>
          <span className={clsx(s.games, s.looses)}>L: {player.loseCount}</span>
          <div className={s.winrate}>Winrate: {winrate}%</div>
        </div>
      </div>
    </div>
  );
};

export default observer(PlayerInfo);
