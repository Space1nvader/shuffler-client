import React from 'react';
import clsx from 'clsx';
import Avatar from 'components/Avatar';
import Button from 'components/Button';
import { playerStore } from 'modules/History/store/player';
import s from './index.module.scss';

const PlayerHeader = (props: { toggleActiveGraphHandler: () => void; isActiveGraph: boolean }) => {
  const { toggleActiveGraphHandler, isActiveGraph } = props;
  const { data } = playerStore.getState();
  const { avatar, name } = data.player;

  return (
    <div className={s.header}>
      <div className={s.content}>
        {!avatar ? <Avatar className={s.avatar} /> : 'avatar'}
        <h5 className={s.title}>{name}</h5>
      </div>

      <Button
        onClick={toggleActiveGraphHandler}
        className={clsx(s.graphButton, isActiveGraph && s.active)}
      >
        График
      </Button>
    </div>
  );
};

export default PlayerHeader;
