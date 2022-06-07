import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';
import RestController from 'components/RestController';
import disciplineStore from 'store/disciplines';
import Player from './components/Player';
import s from './index.module.scss';
import { ladderStore } from './store/ladder';

const Statistic = () => {
  const { data, loading, success, errors } = ladderStore.getState();

  const { discipline } = disciplineStore;

  useEffect(() => {
    ladderStore.getLadderAction();
  }, [discipline]);

  return (
    <PageFrame>
      <PageTitle>Статистика</PageTitle>
      <div className={s.list}>
        <RestController loading={loading} success={success} errors={errors}>
          {data.players.length &&
            data.players.map((player) => <Player key={player.id} {...player} />)}
        </RestController>
      </div>
    </PageFrame>
  );
};

export default observer(Statistic);
