import React, { useState } from 'react';
import { format } from 'date-fns';
import { IGame } from 'api/history';
import Team from '../Team';
import s from './index.module.scss';

const Game = (props: IGame) => {
  const { teams, id, date } = props;
  const [isHover, setHover] = useState(false);

  return (
    <div
      className={s.game}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={s.teams}>
        {teams.map((team, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Team key={`${id}-team-${i}`} {...team} isHover={isHover} />
        ))}
      </div>
      <div className={s.date}>{format(date, 'dd.MM.yy')}</div>
      {/* <div className={s.date}>{date}</div> */}
    </div>
  );
};

export default Game;
