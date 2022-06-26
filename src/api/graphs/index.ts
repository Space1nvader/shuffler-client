import { AxiosResponse } from 'axios';
import disciplineStore from 'store/disciplines';
import RestAPI from '../restApiService';
import { IResponse } from '../types';

export type IGraphPoint = { date: number; score: number };

export interface IGraph {
  playerId?: number;
  coordinates: IGraphPoint[];
}

export interface IGraphsData {
  graph?: IGraph;
}

const GraphApi = {
  getGraph(id: string | number): Promise<AxiosResponse<IResponse<IGraphsData>>> {
    const { discipline } = disciplineStore;

    return RestAPI.get(`graph/${id}?discipline=${discipline}&chatname=sberworks`);
  }
};

export default GraphApi;
