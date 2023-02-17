import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import PageFrame from 'components/PageFrame';
import RestController from 'components/RestController';
import { historyStore } from 'modules/History/store/history';
import disciplineStore from 'store/disciplines';
import GameList from './components/GameList';
import PlayerInfo from './components/PlayerInfo';

const History = () => {
  const { data, loading, success, errors } = historyStore.getState();
  const { id } = useParams();
  const { discipline } = disciplineStore;

  useEffect(() => {
    historyStore.getHistoryAction(id);

    return () => historyStore.resetHistoryAction();
  }, [discipline, id]);

  return (
    <PageFrame withBackButton title="История">
      {id && <PlayerInfo id={id} />}
      <RestController loading={loading} success={success} errors={errors}>
        {success && <GameList games={data.games} id={id} />}
      </RestController>
    </PageFrame>
  );
};

export default observer(History);
