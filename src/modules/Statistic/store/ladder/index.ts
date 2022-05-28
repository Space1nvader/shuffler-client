/* eslint-disable @typescript-eslint/no-unsafe-call */
import { makeAutoObservable, toJS } from 'mobx';
import SERVICE_API from 'api';
import { ILadderData } from 'api/ladder';
import { initialAsyncState, IAsyncState } from 'store/utils/asyncStoreHelpers';

const initialState: IAsyncState<ILadderData> = {
  ...initialAsyncState,
  data: { players: [] }
};

export const ladderStore = makeAutoObservable({
  ladder: initialState,
  getState(): IAsyncState<ILadderData> {
    return toJS(ladderStore.ladder);
  },

  async getLadderAction() {
    ladderStore.ladder.loading = true;
    ladderStore.ladder.success = false;
    ladderStore.ladder.errors = null;

    try {
      const { data } = await SERVICE_API.ladderApi.getLadder();

      ladderStore.ladder = {
        data: data.payload,
        errors: data.errors,
        success: true,
        loading: false
      };
    } catch (errors: unknown) {
      ladderStore.ladder.errors = errors;
      ladderStore.ladder.loading = false;
      ladderStore.ladder.success = false;
    }
  }
});
