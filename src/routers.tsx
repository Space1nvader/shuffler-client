import React from 'react';
import Group from 'modules/Group';
import History from 'modules/History';
import Statistic from 'modules/Statistic';

export const disciplineRoutes = [
  {
    path: '/kicker',
    name: 'Кикер',
    component: <Statistic />
  },
  {
    path: '/pong_pong',
    name: 'Пинг понг',
    component: <Statistic />
  },
  {
    path: '/somedis',
    name: 'Еще',
    component: <Statistic />
  }
];

export const routes = [
  {
    path: '/',
    name: 'Группы',
    component: <Group />
  },
  {
    path: '/:id',
    name: 'Исптория Игрока',
    component: <History />
  },
  ...disciplineRoutes
];
