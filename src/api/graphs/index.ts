import { AxiosResponse } from 'axios';
import disciplineStore from 'store/disciplines';
import RestAPI from '../restApiService';
import { IResponse } from '../types';

export type IGraphPoint = { date: number; score: number };

export interface IGraph {
  playerId: number;
  coordinates: IGraphPoint[];
}

export interface IGraphsData {
  graphs: IGraph[] | [];
}

const GraphsApi = {
  getGraphs(id: string | number): Promise<AxiosResponse<IResponse<IGraphsData>>> {
    const { discipline } = disciplineStore;

    return RestAPI.get(`graphs?discipline=${discipline}&player=${id}`);
  }
};

export default GraphsApi;
