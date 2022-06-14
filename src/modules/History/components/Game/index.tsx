import React, { useState } from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { IGame } from 'api/history';

import Team from './components/Team';
import s from './index.module.scss';

interface HistoryGame extends IGame {
  playerId?: string;
}

const Game = (props: HistoryGame) => {
  const { teams, change, playerId = 0, id, date } = props;
  const [isHover, setHover] = useState(false);

  const winnerTeam = teams.find((team) => team.winner);
  const isWinner = winnerTeam && winnerTeam.players.some((player) => player.id === +playerId);

  return (
    <div
      className={clsx(s.game, isWinner && s.isWinner)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={s.info}>
        <div className={s.date}>{format(date, 'kk:mm dd.MM.yy')}</div>
      </div>
      <div className={s.teams}>
        {teams.map((team, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Team key={`${id}-team-${i}`} {...team} change={change} isHover={isHover} />
        ))}
      </div>
    </div>
  );
};

export default Game;
