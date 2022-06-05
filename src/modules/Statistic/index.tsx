import React, { useEffect } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';
import RestController from 'components/RestController';
import StyledLink from 'components/StyledLink';
import { disciplineRoutes } from 'routers';
import Player from './components/Player';
import s from './index.module.scss';
import { ladderStore } from './store/ladder';

const Statistic = () => {
  const { pathname } = useLocation();
  const { data, loading, success, errors } = ladderStore.getState();

  useEffect(() => {
    const pathArray = pathname.split('/');

    ladderStore.getLadderAction(pathArray[pathArray.length - 1]);
  }, [pathname]);

  return (
    <PageFrame>
      <PageTitle>Статистика</PageTitle>

      <div className={s.disciplines}>
        {disciplineRoutes.map((route) => (
          <StyledLink
            key={route.path}
            className={clsx(s.link, pathname === route.path && s.active)}
            to={route.path}
          >
            {route.name}
          </StyledLink>
        ))}
      </div>
      <div className={s.list}>
        <RestController loading={loading} success={success} errors={errors}>
          {data.players.length &&
            data.players.map((player) => <Player key={player.id} {...player} />)}
        </RestController>
      </div>
    </PageFrame>
  );
};

export default observer(Statistic);
