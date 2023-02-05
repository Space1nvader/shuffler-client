import React, { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import RestController from 'components/RestController';
import disciplineStore from 'store/disciplines';
import { useDevice } from 'utils/hooks/useDevice';
import { playerStore } from '../../store/player';
import PlayerGraph from './components/PlayerGraph';
import PlayerHeader from './components/PlayerHeader';
import s from './index.module.scss';

const PlayerInfo: IFC<{ id: string }> = (props) => {
  const { id, className = '' } = props;
  const [isActiveGraph, toggleActiveGraph] = useState(false);
  const [isFixedHeader, setFixedHeader] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useDevice();

  const { data, loading, success, errors } = playerStore.getState();
  const { player } = data;
  const { discipline } = disciplineStore;

  const toggleActiveGraphHandler = () => {
    toggleActiveGraph((prevState) => !prevState);
  };

  const windowScrollHandler = () => {
    if (headerRef.current && window.scrollY - 140 > headerRef.current?.clientHeight) {
      if (headerRef?.current.style.position !== 'fixed') {
        setFixedHeader(true);

        return undefined;
      }

      return undefined;
    }
    setFixedHeader(false);

    return undefined;
  };

  useEffect(() => {
    playerStore.getPlayerAction(id);

    return () => playerStore.resetPlayerAction();
  }, [id, discipline]);

  useEffect(() => {
    if (isMobile) {
      windowScrollHandler();
      window.addEventListener('scroll', windowScrollHandler);
    }

    return () => {
      window.removeEventListener('scroll', windowScrollHandler);
    };
  }, [!!headerRef.current, isMobile]);

  const winrate = useMemo(() => {
    if (player) {
      const games = player.winCount + player.loseCount;

      return Math.round((player.winCount / games) * 100);
    }

    return undefined;
  }, [JSON.stringify(player)]);

  return (
    <div className={clsx(s.header, isFixedHeader && s.fixed, className)} ref={headerRef}>
      <RestController loading={loading} success={success} errors={errors}>
        {!Number.isNaN(winrate) && (
          <div className={s.info}>
            <PlayerHeader
              isVisibleGraphToggle={!isFixedHeader}
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
        {isActiveGraph && !isFixedHeader && <PlayerGraph id={id} />}
      </RestController>
    </div>
  );
};

export default observer(PlayerInfo);
