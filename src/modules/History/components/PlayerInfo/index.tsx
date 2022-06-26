import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Loader from 'components/Loader';
import RestController from 'components/RestController';
import disciplineStore from 'store/disciplines';
import { IFC } from 'types';
import { playerStore } from '../../store/player';
import PlayerGraph from './components/PlayerGraph';
import PlayerHeader from './components/PlayerHeader';
import s from './index.module.scss';

const PlayerInfo: IFC<{ id: string }> = (props) => {
  const { id } = props;
  const { data, loading, success, errors } = playerStore.getState();
  const { player } = data;

  const { discipline } = disciplineStore;

  const [isActiveGraph, toggleActiveGraph] = useState(false);
  const toggleActiveGraphHandler = () => {
    toggleActiveGraph((prevState) => !prevState);
  };
  useEffect(() => {
    playerStore.getPlayerAction(id);
  }, [id, discipline]);

  const winrate = useMemo(() => {
    if (player) {
      const games = player.winCount + player.loseCount;

      return Math.round((player.winCount / games) * 100);
    }

    return undefined;
  }, [JSON.stringify(player)]);

  return (
    <div className={s.header}>
      <RestController loading={loading} success={success} errors={errors}>
        {!Number.isNaN(winrate) && (
          <div className={s.info}>
            <PlayerHeader
              isActiveGraph={isActiveGraph}
              toggleActiveGraphHandler={toggleActiveGraphHandler}
            />
            <div className={s.stats}>
              <div className={s.score}>Счет: {player.score}</div>
              <div className={s.played}>
                <span title="Победы" className={clsx(s.games, s.wins)}>
                  W: {player.winCount}
                </span>
                <span title="Поражения" className={clsx(s.games, s.looses)}>
                  L: {player.loseCount}
                </span>
                <div className={s.winrate}>Winrate: {winrate}%</div>
              </div>
            </div>
          </div>
        )}
        {isActiveGraph && <PlayerGraph id={id} />}
      </RestController>
    </div>
  );
};

export default observer(PlayerInfo);
