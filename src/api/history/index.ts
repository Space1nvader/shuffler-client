import { AxiosResponse } from 'axios';
import { IPlayer } from 'api/ladder';
import disciplineStore from 'store/disciplines';
import RestAPI from '../restApiService';

export interface IGame {
  id: number;
  teams: ITeam[];
  date: number;
}

export interface ITeam {
  players: IPlayer[];
  winner: boolean;
}

// export interface IHistoryData {
//   games: IGame[] | [];
// }
export type IHistoryData = IGame[] | [];

const HistoryApi = {
  getHistory(id?: string): Promise<AxiosResponse<IHistoryData>> {
    // /api/history/<playerId>?discipline=<discName>;season=<seasonId>;chat=<chatId>
    const path = disciplineStore.getDisciplinePath();

    // return RestAPI.get(`history${id && `/${id}`}?discipline=${path}`);
    return RestAPI.get(`history${id && `/${id}`}?discipline=${path}`);
  }
};

export default HistoryApi;
