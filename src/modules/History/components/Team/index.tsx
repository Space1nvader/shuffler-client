import React, { useRef } from 'react';
import clsx from 'clsx';
import { ITeam } from 'api/history';
import { IPlayer } from 'api/ladder';
import CrownIcon from 'components/Icons/CrownIcon';
import Player from '../Player';
import s from './index.module.scss';

interface IHistoryTeamProps extends ITeam {
  isHover?: boolean;
}

const Team = (props: IHistoryTeamProps) => {
  const { players, isWinners } = props;

  return (
    <div className={s.team}>
      <div className={s.players}>
        {isWinners && <CrownIcon className={s.icon} />}
        {players.map((player: IPlayer) => (
          <Player key={player.id} {...player} />
        ))}
      </div>
      {/* // TODO: Детальная информация команд и игроков при наведении
       (количество полученных очков, командный рейтинг) */}
      {/* {isHover && <div className={s.info}>team mmr: 123</div>} */}
    </div>
  );
};

export default Team;
