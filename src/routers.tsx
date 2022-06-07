import React from 'react';
import Group from 'modules/Group';
import History from 'modules/History';
import Statistic from 'modules/Statistic';

const withBasePath = (path: string) => `${process.env.REACT_APP_BASE_URL}${path}`;

// export const disciplineRoutes = [
//   {
//     path: withBasePath('/kicker'),
//     name: 'Кикер',
//     component: <Statistic />
//   },
//   {
//     path: withBasePath('/pong'),
//     name: 'Пинг понг',
//     component: <Statistic />
//   },
//   {    path: withBasePath('/ladder'),
//     name: 'Еще',
//     component: <Statistic />
//   }

// ];

export const routes = [
  {
    path: withBasePath('/ladder'),
    name: 'Еще',
    component: <Statistic />
  },
  {
    path: withBasePath('/'),
    name: 'Группы',
    component: <Group />
  },
  {
    path: withBasePath('/:id'),
    name: 'Исптория Игрока',
    component: <History />
  }
  // ...disciplineRoutes
];
