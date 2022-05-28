import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';
import Player from './components/Player';
import s from './index.module.scss';
import { ladderStore } from './store/ladder';

const Statistic = () => {
  const { data, loading, success } = ladderStore.getState();

  useEffect(() => {
    ladderStore.getLadderAction();
  }, []);

  return (
    <PageFrame>
      <PageTitle>Статистика</PageTitle>
      <div className={s.list}>
        {!loading &&
          success &&
          data.players.length &&
          data.players.map((player) => <Player key={player.id} {...player} />)}
      </div>
    </PageFrame>
  );
};

export default observer(Statistic);
