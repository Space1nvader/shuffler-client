import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import Messege from 'components/Messege';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';
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
  }, [discipline, id]);

  return (
    <PageFrame>
      <PageTitle withBackButton>История</PageTitle>
      {id && <PlayerInfo id={id} />}

      <RestController loading={loading} success={success} errors={errors}>
        <GameList games={data.games} id={id} />
      </RestController>
    </PageFrame>
  );
};

export default observer(History);
