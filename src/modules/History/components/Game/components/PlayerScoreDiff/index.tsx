import React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import s from './index.module.scss';

const PlayerScoreDiff = (props: { change: number; score?: number }) => {
  const { change, score = 0 } = props;
  const isPositive = change >= 0;

  return score > 0 ? (
    <div className={clsx(s.score, isPositive ? s.positive : s.negative)}>
      <span className={clsx(s.diff, isPositive ? s.positive : s.negative)}>
        {isPositive && '+'}
        {change}
      </span>
      ({score})
    </div>
  ) : (
    <div className={s.score}>Калибровка</div>
  );
};

export default observer(PlayerScoreDiff);
