import React from 'react';
import { fromUnixTime } from 'date-fns';
import { IGame } from 'api/history';
import Team from '../Team';
import s from './index.module.scss';

const Game = (props: IGame) => {
  const { teams, id, date } = props;

  return (
    <div className={s.game}>
      <div className={s.teams}>
        {teams.map((team, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Team key={`${id}-team-${i}`} {...team} />
        ))}
      </div>
      <div className={s.date}>{fromUnixTime(date).toString()}</div>
    </div>
  );
};

export default Game;
