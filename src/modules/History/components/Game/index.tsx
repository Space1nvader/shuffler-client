import React, { useState } from 'react';
import clsx from 'clsx';
import { IGame } from 'api/history';
import Team from './components/Team';
import s from './index.module.scss';

interface HistoryGame extends IGame {
  playerId?: string;
}

const Game = (props: HistoryGame) => {
  const { teams, change, playerId = 0, id } = props;
  const [isDetailsActive, setDetailsActive] = useState(false);

  const winnerTeam = teams.find((team) => team.winner);
  const isWinner = winnerTeam && winnerTeam.players.some((player) => player.id === +playerId);

  const setDetailsActiveHandler = () => {
    setDetailsActive((prevState) => !prevState);
  };

  return (
    <div className={clsx(s.game, isWinner && s.isWinner)}>
      <div className={s.info}>
        {/* <button onClick={setDetailsActiveHandler} className={s.moreBtn} type="button">
          {isDetailsActive ? 'Скрыть' : 'Подробнее'}
        </button> */}
      </div>
      <div className={s.teams}>
        {teams.map((team, i) => (
          <Team
            // eslint-disable-next-line react/no-array-index-key
            key={`${id}-team-${i}`}
            {...team}
            change={change}
            isDetailsActive={isDetailsActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
