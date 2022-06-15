import { makeAutoObservable, runInAction, toJS } from 'mobx';
import SERVICE_API from 'api';
import { IGraphsData } from 'api/graphs';
import { initialAsyncState, IAsyncState } from 'store/utils/asyncStoreHelpers';

const initialState: IAsyncState<IGraphsData> = {
  ...initialAsyncState,
  data: { graphs: [] }
};

export const graphsStore = makeAutoObservable({
  graphs: initialState,
  getState(): IAsyncState<IGraphsData> {
    return toJS(this.graphs);
  },

  async getGraphsAction(id: string) {
    runInAction(() => {
      this.graphs.loading = true;
      this.graphs.success = false;
      this.graphs.errors = null;
    });

    try {
      const { data } = await SERVICE_API.graphsApi.getGraphs(id);
      runInAction(() => {
        this.graphs = {
          data: data.payload,
          errors: null,
          success: true,
          loading: false
        };
      });
    } catch (errors: unknown) {
      runInAction(() => {
        this.graphs.errors = errors as Error;
        this.graphs.loading = false;
        this.graphs.success = false;
      });
    }
  }
});
