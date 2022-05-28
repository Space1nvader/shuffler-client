import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';
import { historyStore } from 'modules/History/store/history';
import Game from './components/Game';
import s from './index.module.scss';

interface IPlayerHistoryProps {
  id?: number;
}

const History = () => {
  const { id } = useParams();

  const { data, loading, success } = historyStore.getState();

  useEffect(() => {
    historyStore.getHistoryAction(id);
  }, []);

  return (
    <PageFrame>
      <PageTitle>История</PageTitle>
      {!loading &&
        success &&
        data.games.length &&
        data.games.map((game) => <Game key={game.id} {...game} />)}
    </PageFrame>
  );
};

export default observer(History);
