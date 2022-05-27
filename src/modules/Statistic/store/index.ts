/* eslint-disable @typescript-eslint/no-unsafe-call */
import SERVICE_API from 'api';
import { createAsyncStore, initialAsyncState } from 'store/utils/createAsyncStore';

export const ladderStore = createAsyncStore({
  ladder: initialAsyncState,
  getLadderAction(): void {
    this.createRequest('ladder', SERVICE_API.ladderApi.getLadder());
  }
});
