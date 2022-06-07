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
    const path = disciplineStore.getDisciplinePath();

    return RestAPI.get(`chat/sberworks?discipline=${path}`);
  }
};

export default LadderApi;
