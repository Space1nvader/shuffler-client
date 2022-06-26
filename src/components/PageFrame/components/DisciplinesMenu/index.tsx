import React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import Button from 'components/Button';
import PapperFrame from 'components/PapperFrame';
import { useDisciplineStore } from 'store/disciplines';
import { Discipline } from 'store/disciplines/types';
import s from './index.module.scss';

export type IDisciplineRoute = {
  name: string;
  path: Discipline;
};

export const disciplineRoutes: IDisciplineRoute[] = [
  {
    name: 'Кикер',
    path: 'kicker'
  },
  {
    name: 'Пинг понг',
    path: 'pong'
  }
];

const DisciplinesMenu = () => {
  const { discipline, setDiscipline } = useDisciplineStore();

  return (
    <PapperFrame className={s.disciplines}>
      {disciplineRoutes.map((route) => (
        <Button
          key={route.path}
          className={clsx(s.button, discipline === route.path && s.active)}
          onClick={setDiscipline(route.path)}
        >
          {route.name}
        </Button>
      ))}
    </PapperFrame>
  );
};

export default observer(DisciplinesMenu);
