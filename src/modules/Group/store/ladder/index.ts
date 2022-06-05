/* eslint-disable @typescript-eslint/no-unsafe-call */
import { makeAutoObservable, runInAction, toJS } from 'mobx';
import SERVICE_API from 'api';
import { ILadderData } from 'api/ladder';
import { initialAsyncState, IAsyncState } from 'store/utils/asyncStoreHelpers';

const initialState: IAsyncState<ILadderData> = {
  ...initialAsyncState,
  data: { players: [] }
};

export const ladderStore = makeAutoObservable({});
