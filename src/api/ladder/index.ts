import { AxiosResponse } from 'axios';
import RestAPI from '../restApiService';

export interface IPlayer {
  id: number;
  name: string;
  score?: number;
}

export interface ILadderData {
  players: IPlayer[] | [];
}

export interface ILadderResponse<T> {
  payload: T;
  errors: unknown;
}

const LadderApi = {
  getLadder(): Promise<AxiosResponse<ILadderResponse<ILadderData>>> {
    return RestAPI.get(`ladder`);
  }
};

export default LadderApi;
