import { makeAutoObservable, runInAction, toJS } from 'mobx';
import SERVICE_API from 'api';
import { ILadderData } from 'api/ladder';
import { initialAsyncState, IAsyncState } from 'store/utils/asyncStoreHelpers';

const initialState: IAsyncState<ILadderData> = {
  ...initialAsyncState,
  data: { players: [] }
};

export const ladderStore = makeAutoObservable(
  {
    ladder: initialState,
    getState(): IAsyncState<ILadderData> {
      return toJS(this.ladder);
    },

    async getLadderAction() {
      runInAction(() => {
        this.ladder.loading = true;
        this.ladder.success = false;
        this.ladder.errors = null;
      });

      try {
        const { data } = await SERVICE_API.ladderApi.getLadder();

        runInAction(() => {
          this.ladder = {
            data,
            errors: null,
            success: true,
            loading: false
          };
        });
      } catch (errors: unknown) {
        runInAction(() => {
          this.ladder.errors = errors as Error;
          this.ladder.loading = false;
          this.ladder.success = false;
        });
      }
    }
  },
  {},
  { autoBind: true }
);
