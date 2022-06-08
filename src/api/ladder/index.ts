import { AxiosResponse } from 'axios';
import disciplineStore from 'store/disciplines';
import RestAPI from '../restApiService';

export interface IPlayer {
  id: number;
  name: string;
  score?: number;
}

export interface ILadderData {
  players: IPlayer[] | [];
}

const LadderApi = {
  getLadder(): Promise<AxiosResponse<ILadderData>> {
    // Удаляет ковычки которые подкладывает localstorage
    const { discipline } = disciplineStore;

    return RestAPI.get(`chat/sberworks?discipline=${discipline}`);
  }
};

export default LadderApi;
