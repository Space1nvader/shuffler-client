import React from 'react';
import { Link } from 'react-router-dom';
import { IPlayer } from 'api/ladder';
import s from './index.module.scss';

// interface IPlayerProps extends IPlayer {
//   onMouseEnter: () => void;
//   onMouseLeave: () => void;
// }

const Player: React.FC<IPlayer> = (props) => {
  const { name, id, score } = props;

  return (
    <Link to={`${id}`} title={`Просмотреть историю ${name}`} className={s.player}>
      <div className={s.content}>
        <span className={s.name}>{name}</span> <span className={s.score}>{score}</span>
      </div>
    </Link>
  );
};

export default Player;
