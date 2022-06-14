import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import sadgeImage from 'assets/images/sadge.png';
import Messege from 'components/Messege';
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
  }, [discipline, id]);

  return (
    <PageFrame>
      <PageTitle withBackButton>История</PageTitle>
      {id && <PlayerInfo id={id} />}
      <div>
        <RestController loading={loading} success={success} errors={errors}>
          {data.games.length !== 0 ? (
            data.games.map((game) => <Game key={game.id} playerId={id} {...game} />)
          ) : (
            <Messege>
              <img style={{ marginBottom: '.4rem', width: '3rem' }} src={sadgeImage} alt="Sadge" />
              <h6>Нет данных</h6>
            </Messege>
          )}
        </RestController>
      </div>
    </PageFrame>
  );
};

export default observer(History);
