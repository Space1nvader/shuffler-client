import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import Loader from 'components/Loader';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';
import { historyStore } from 'modules/History/store/history';
import Game from './components/Game';
import PlayerInfo from './components/PlayerInfo';
import s from './index.module.scss';

const History = () => {
  const { id } = useParams();

  const { data, loading, success } = historyStore.getState();

  useEffect(() => {
    historyStore.getHistoryAction(id);
  }, []);

  return (
    <PageFrame>
      <PageTitle withBackButton>История</PageTitle>

      {/* 
      TODO USER PROFILE WITH API
      {id && <PlayerInfo id={id} />} */}
      <div className={s.list}>
        {loading ? (
          <Loader style={{ height: 'calc(100% - 5rem)' }} />
        ) : (
          success && data.games.length && data.games.map((game) => <Game key={game.id} {...game} />)
        )}
      </div>
    </PageFrame>
  );
};

export default observer(History);
