export interface IResponse<T> {
  payload: T;
  errors: Error | null;
}
