import { makeAutoObservable, runInAction, toJS } from 'mobx';
import SERVICE_API from 'api';
import { IHistoryData } from 'api/history';
import { initialAsyncState, IAsyncState } from 'store/utils/asyncStoreHelpers';

const initialState: IAsyncState<IHistoryData> = {
  ...initialAsyncState,
  data: { games: [] }
};

export const historyStore = makeAutoObservable({
  history: initialState,
  getState(): IAsyncState<IHistoryData> {
    return toJS(this.history);
  },

  async getHistoryAction(id?: string) {
    runInAction(() => {
      this.history.loading = true;
      this.history.success = false;
      this.history.errors = null;
    });

    try {
      const { data } = await SERVICE_API.historyApi.getHistory(id);
      runInAction(() => {
        this.history = {
          data: data.payload,
          errors: null,
          success: true,
          loading: false
        };
      });
    } catch (errors: unknown) {
      runInAction(() => {
        this.history.errors = errors as Error;
        this.history.loading = false;
        this.history.success = false;
      });
    }
  }
});
