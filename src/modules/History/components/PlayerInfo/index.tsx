import React from 'react';
import Avatar from 'components/Avatar';
import { IFC } from 'types';
import s from './index.module.scss';

const PlayerInfo: IFC<{ id: number | string }> = (props) => {
  const { id } = props;

  return (
    <div className={s.info}>
      <Avatar className={s.avatar} />
      <h5 className={s.title}>Никнейм игрока {id}</h5>
      <div className={s.content}>
        <div className={s.score}>Счет: 32131</div>
        <div className={s.winrate}> w 50 / l 40</div>
      </div>
    </div>
  );
};

export default PlayerInfo;
