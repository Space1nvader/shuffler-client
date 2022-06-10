import React, { useState } from 'react';
import { format } from 'date-fns';
import { IGame } from 'api/history';

import Team from './components/Team';
import s from './index.module.scss';

const Game = (props: IGame) => {
  const { teams, change, id, date } = props;
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
          <Team key={`${id}-team-${i}`} {...team} change={change} isHover={isHover} />
        ))}
      </div>
      <div className={s.info}>
        <div className={s.date}>{format(date, 'kk:mm  dd.MM.yy')}</div>
      </div>
    </div>
  );
};

export default Game;
