export type IAsyncState<T = []> = {
  data: T;
  loading: boolean;
  success: boolean;
  errors: unknown;
};

export const initialAsyncState = {
  loading: false,
  success: false,
  errors: null
};

export const pendingRequestState = {
  loading: true,
  success: false,
  errors: null
};

export const successRequestState = {
  loading: false,
  success: true
};

export const failedRequestState = { loading: false, success: false };
