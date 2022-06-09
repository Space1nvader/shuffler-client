import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';
import RestController from 'components/RestController';
import { historyStore } from 'modules/History/store/history';
import disciplineStore from 'store/disciplines';
import Game from './components/Game';
import PlayerInfo from './components/PlayerInfo';

const History = () => {
  const { id } = useParams();

  const { data, loading, success, errors } = historyStore.getState();

  const { discipline } = disciplineStore;

  useEffect(() => {
    historyStore.getHistoryAction(id);
  }, [discipline]);

  return (
    <PageFrame>
      <PageTitle withBackButton>История</PageTitle>
      {id && <PlayerInfo id={id} />}
      <div>
        <RestController loading={loading} success={success} errors={errors}>
          {!!data.games.length && data.games.map((game) => <Game key={game.id} {...game} />)}
        </RestController>
      </div>
    </PageFrame>
  );
};

export default observer(History);
