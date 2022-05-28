import React from 'react';
import { ITeam } from 'api/history';
import { IPlayer } from 'api/ladder';
import CrownIcon from 'components/Icons/CrownIcon';
import Player from '../Player';
import s from './index.module.scss';

const Team = (props: ITeam) => {
  const { players, isWinners } = props;

  return (
    <div className={s.team}>
      {isWinners && <CrownIcon className={s.icon} />}
      {players.map((player: IPlayer) => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
};

export default Team;
