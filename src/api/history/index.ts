import { AxiosResponse } from 'axios';
import { IPlayer } from 'api/ladder';
import RestAPI from '../restApiService';

export interface IGame {
  id: number;
  teams: ITeam[];
  date: number;
}

export interface ITeam {
  players: IPlayer[];
  isWinners?: boolean;
}

export interface IHistoryData {
  games: IGame[] | [];
}

export interface IHistoryResponse<T> {
  payload: T;
  errors: Error | null;
}

const HistoryApi = {
  getHistory(id?: string): Promise<AxiosResponse<IHistoryResponse<IHistoryData>>> {
    return RestAPI.get(`history${id && `/${id}`}`);
  }
};

export default HistoryApi;
