import { AxiosResponse } from 'axios';
import RestAPI from '../restApiService';

export interface ILadderData {
  data: { id: number; name: string; score: number }[];
}

const mok = {
  data: [
    { id: 1, name: 'name1', score: 123 },
    { id: 2, name: 'name2', score: 321 }
  ]
} as ILadderData;

abstract class LadderApi {
  // public static getLadder = (): Promise<AxiosResponse<ILadderData>> => RestAPI.get(`ladder`);
  public static getLadder = (): ILadderData => mok;
}

export default LadderApi;
