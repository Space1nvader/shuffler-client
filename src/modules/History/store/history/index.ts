/* eslint-disable @typescript-eslint/no-unsafe-call */
import { makeAutoObservable, toJS } from 'mobx';
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
    return toJS(historyStore.history);
  },

  async getHistoryAction(id?: string) {
    historyStore.history.loading = true;
    historyStore.history.success = false;
    historyStore.history.errors = null;

    try {
      const { data } = await SERVICE_API.historyApi.getHistory(id);

      historyStore.history = {
        data: data.payload,
        errors: data.errors,
        success: true,
        loading: false
      };
    } catch (errors: unknown) {
      historyStore.history.errors = errors;
      historyStore.history.loading = false;
      historyStore.history.success = false;
    }
  }
});
