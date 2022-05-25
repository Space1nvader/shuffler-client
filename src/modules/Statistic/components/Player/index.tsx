import React from 'react';
import s from './index.module.scss';

interface IPlayerProps {
  name: string;
  score: number;
}

const Player: React.FC<IPlayerProps> = (props) => {
  const { name, score } = props;

  return (
    <div className={s.player}>
      <span>{name}</span> <span>{score}</span>
    </div>
  );
};

export default Player;
