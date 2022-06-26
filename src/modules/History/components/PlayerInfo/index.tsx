import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Avatar from 'components/Avatar';
import Loader from 'components/Loader';
import disciplineStore from 'store/disciplines';
import { IFC } from 'types';
import { playerStore } from '../../store/player';
import PlayerGraph from './components/PlayerGraph';
import PlayerHeader from './components/PlayerHeader';
import s from './index.module.scss';

const PlayerInfo: IFC<{ id: string }> = (props) => {
  const { id } = props;
  const { data, loading } = playerStore.getState();
  const { player } = data;

  const { discipline } = disciplineStore;

  const [isActiveGraph, toggleActiveGraph] = useState(false);
  const toggleActiveGraphHandler = () => {
    toggleActiveGraph((prevState) => !prevState);
  };
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
        <Avatar src={player.avatar} className={s.avatar} />
        <h5 className={s.title}>{player.name}</h5>
      </div>
      <div className={s.stats}>
        <div className={s.score}>Счет: {player.score}</div>
        {!Number.isNaN(winrate) && (
          <div className={s.played}>
            <span title="Победы" className={clsx(s.games, s.wins)}>
              W: {player.winCount}
            </span>
            <span title="Поражения" className={clsx(s.games, s.looses)}>
              L: {player.loseCount}
            </span>
            <div className={s.winrate}>Winrate: {winrate}%</div>
          </div>
        )}
        <PlayerHeader
          isActiveGraph={isActiveGraph}
          toggleActiveGraphHandler={toggleActiveGraphHandler}
        />

        <div className={s.stats}>
          <div className={s.score}>Счет: {player.score}</div>
          {!Number.isNaN(winrate) && (
            <div className={s.played}>
              <span className={clsx(s.games, s.wins)}>W: {player.winCount}</span>
              <span className={clsx(s.games, s.looses)}>L: {player.loseCount}</span>
              <div className={s.winrate}>Winrate: {winrate}%</div>
            </div>
          )}
        </div>
      </div>
      {isActiveGraph && <PlayerGraph id={id} />}
    </div>
  );
};

export default observer(PlayerInfo);
