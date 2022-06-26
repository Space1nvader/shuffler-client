import React from 'react';
import { format } from 'date-fns';
import { IGame } from 'api/history';
import sadgeImage from 'assets/images/sadge.png';
import Messege from 'components/Messege';
import { IFC } from 'types';
import Game from '../Game';
import s from './index.module.scss';

const GameList: IFC<{ games: IGame[]; id?: string }> = (props) => {
  const { games, id } = props;
  let currentDate = '';

  const setDateTitle = (date: number) => {
    const stringDate = format(date, 'dd.MM.yy');

    if (!currentDate || currentDate !== stringDate) {
      currentDate = stringDate;

      return <h6 className={s.date}>{stringDate}</h6>;
    }

    return undefined;
  };

  return (
    <div className={s.games}>
      {games.length !== 0 ? (
        games.map((game) => (
          <div key={game.id}>
            {setDateTitle(game.date)}
            <Game playerId={id} {...game} />
          </div>
        ))
      ) : (
        <Messege>
          <img style={{ marginBottom: '.4rem', width: '3rem' }} src={sadgeImage} alt="Sadge" />
          <h6>Нет данных</h6>
        </Messege>
      )}
    </div>
  );
};

export default GameList;
