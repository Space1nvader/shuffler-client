import { makeAutoObservable, runInAction, toJS } from 'mobx';
import SERVICE_API from 'api';
import { IPlayerResponse } from 'api/player';
import { initialAsyncState, IAsyncState } from 'store/utils/asyncStoreHelpers';

const initialState: IAsyncState<IPlayerResponse> = {
  ...initialAsyncState,
  data: { player: {} }
};

export const playerStore = makeAutoObservable({
  player: initialState,
  getState(): IAsyncState<IPlayerResponse> {
    return toJS(this.player);
  },

  async getPlayerAction(id: string | number) {
    runInAction(() => {
      this.player.loading = true;
      this.player.success = false;
      this.player.errors = null;
    });

    try {
      const { data } = await SERVICE_API.playerApi.getPlayerInfo(id);
      runInAction(() => {
        this.player = {
          data: data.payload,
          errors: null,
          success: true,
          loading: false
        };
      });
    } catch (errors: unknown) {
      runInAction(() => {
        this.player.errors = errors as Error;
        this.player.loading = false;
        this.player.success = false;
      });
    }
  }
});
