import React from 'react';
import Group from 'modules/Group';
import History from 'modules/History';
import Statistic from 'modules/Statistic';

const withBasePath = (path: string) => `${process.env.REACT_APP_BASE_URL}${path}`;

export const routes = [
  {
    path: withBasePath('/ladder'),
    name: 'Еще',
    exact: true,
    element: <Statistic />
  },
  {
    path: withBasePath('/'),
    name: 'Группы',
    element: <Group />
  },
  {
    path: withBasePath('/:id'),
    name: 'Исптория Игрока',
    element: <History />
  }
];
