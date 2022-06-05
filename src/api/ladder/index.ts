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
  errors: Error;
}

const LadderApi = {
  getLadder(pathname: string): Promise<AxiosResponse<ILadderResponse<ILadderData>>> {
    return RestAPI.get(`chat/beta?discipline=${pathname.toUpperCase()}`);
  }
};

export default LadderApi;
