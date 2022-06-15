import { AxiosResponse } from 'axios';
import { IPlayer } from 'api/ladder';
import disciplineStore from 'store/disciplines';
import RestAPI from '../restApiService';
import { IResponse } from '../types';

export interface IPlayerDetails extends IPlayer {
  winCount: number;
  loseCount: number;
}

export interface IPlayerResponse {
  player: IPlayerDetails | Record<string, never>;
}

const PlayerApi = {
  getPlayerInfo(id?: string | number): Promise<AxiosResponse<IResponse<IPlayerResponse>>> {
    const { discipline } = disciplineStore;

    return RestAPI.get(`player/${id}?discipline=${discipline}`);
  }
};

export default PlayerApi;
