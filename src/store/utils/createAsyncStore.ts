// @ts-nocheck
import { AxiosResponse } from 'axios';
import { makeAutoObservable, toJS } from 'mobx';

export interface AsyncStore<T> {
  // TODO: тип возвращаемого значения некоректен
  this: {
    getStore: (key?: string) => AsyncState[key] | AsyncState<T>;
    createRequest: (key: string, method: Promise<AxiosResponse>) => void;
  };
}

export interface AsyncState<T> {
  data: T;
  loading: boolean;
  success: boolean;
  error: null | string;
}

export const initialAsyncState = {
  data: [],
  loading: false,
  success: false,
  error: null
};

// TODO: тип возвращаемого значения некоректен
const setAsyncParams = (params = {}): AsyncState<[]> => ({
  ...initialAsyncState,
  ...params
});

export function createAsyncStore(state): AsyncStore {
  return makeAutoObservable({
    getStore(key) {
      return toJS(this[key] || this);
    },
    // TODO: надо проработать тип и вызов асихронной функции
    // TODO: придумать способ вытащить функцию из стороа

    async createRequest(key, method) {
      this[key] = setAsyncParams();

      try {
        const { data } = await method;

        // TODO: TS !!! Object is possibly 'undefined'.
        this[key] = setAsyncParams({
          data: data.payload,
          loading: false,
          success: true,
          error: new Error(data.errors)
        });
      } catch (error: Error) {
        // TODO: TS !!! Object is possibly 'undefined'.
        error.name = '';
        this[key] = setAsyncParams({ loading: false, error: error.toString() });
      }
    },
    ...state
  });
}
