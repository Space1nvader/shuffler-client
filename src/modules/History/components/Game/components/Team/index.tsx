import React from 'react';
import { ITeam } from 'api/history';
import { IPlayer } from 'api/ladder';
import Player from '../Player';
import s from './index.module.scss';

interface IHistoryTeamProps extends ITeam {
  isHover?: boolean;
  change: number;
}

const Team = (props: IHistoryTeamProps) => {
  const { players, change } = props;

  return (
    <div className={s.team}>
      <div className={s.players}>
        {players.map((player: IPlayer) => (
          <Player key={player.id} change={change} {...player} />
        ))}
      </div>
      {/* // TODO: Детальная информация команд и игроков при наведении
       (количество полученных очков, командный рейтинг) */}
      {/* {isHover && <div className={s.info}>team mmr: 123</div>} */}
    </div>
  );
};

export default Team;
