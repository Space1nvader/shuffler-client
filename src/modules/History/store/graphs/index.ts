import { makeAutoObservable, runInAction, toJS } from 'mobx';
import SERVICE_API from 'api';
import { IGraphsData } from 'api/graphs';
import { initialAsyncState, IAsyncState } from 'store/utils/asyncStoreHelpers';

const initialState: IAsyncState<IGraphsData> = {
  ...initialAsyncState,
  data: {}
};

export const graphsStore = makeAutoObservable({
  graph: initialState,
  getState(): IAsyncState<IGraphsData> {
    return toJS(this.graph);
  },

  async getGraphAction(id: string) {
    runInAction(() => {
      this.graph.loading = true;
      this.graph.success = false;
      this.graph.errors = null;
    });

    try {
      const { data } = await SERVICE_API.graphApi.getGraph(id);
      runInAction(() => {
        this.graph = {
          data: data.payload,
          errors: null,
          success: true,
          loading: false
        };
      });
    } catch (errors: unknown) {
      runInAction(() => {
        this.graph.errors = errors as Error;
        this.graph.loading = false;
        this.graph.success = false;
      });
    }
  }
});
