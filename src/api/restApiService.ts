import axios, { AxiosError, AxiosResponse, AxiosInstance, AxiosRequestHeaders } from 'axios';



class RestAPI {
  url: string;

  headers: AxiosRequestHeaders;

  constructor() {
    this.url = process.env.REACT_APP_API_URL || '';
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=5256000' // 2 month,
    };

    // this.tokenName = tokenName;
  }

  private handleSuccess = (response: AxiosResponse): AxiosResponse => response;

  // TODO: Описать текста ошибок для запросов
  // TODO: Переработать формат текста ошибок для нескольких языков(Interface = IMultiLangText)
  private handleError = (error: AxiosError): Promise<object> | void => {
    switch (error?.response?.status) {
      case 404:
        return Promise.reject(new Error('Ничего не найдено Ошибка 404'));
        break;
      case 401:
        return Promise.reject(new Error('Ошибка 401'));
        break;
      case 502:
        return Promise.reject(new Error('Ошибка 502'));
        break;
      case 400:
        return Promise.reject(error);
      default:
        break;
    }

    return Promise.reject(new Error('Что-то пошло не так'));
  };

  // TODO: Определиться с обработкой токена на фронте
  // TODO: В момент разработки токены не используются, но запланированы в будущем
  private create = (headers?: AxiosRequestHeaders): AxiosInstance => {
    // const cancel = axios.CancelToken.source();
    // const token = localStorage.getItem(this.tokenName);
    // const headerAuth = token && { Authorization: `Bearer ${token}` }

    const service = axios.create({
      headers: {
        ...this.headers,
        ...headers
        // ...headerAuth
      }
      //   cancelToken: cancel.token
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);

    return service;
  };

  public get<T>(
    path = '',
    params: object = {},
    headers: AxiosRequestHeaders = {}
  ): Promise<AxiosResponse<T>> {
    const service = this.create(headers);

    return service.request({
      method: 'GET',
      url: `${this.url}${path}`,
      params
    });
  }

  public post<T>(
    path = '',
    data: object = {},
    headers: AxiosRequestHeaders = {}
  ): Promise<AxiosResponse<T>> {
    const service = this.create(headers);

    return service.request({
      method: 'POST',
      url: `${this.url}${path}`,
      data
    });
  }

  public put<T>(
    path = '',
    data: object = {},
    headers: AxiosRequestHeaders = {}
  ): Promise<AxiosResponse<T>> {
    const service = this.create(headers);

    return service.request({
      method: 'PUT',
      url: `${this.url}${path}`,
      data
    });
  }

  public delete<T>(
    path = '',
    data: object = {},
    params: object = {},
    headers: AxiosRequestHeaders = {}
  ): Promise<AxiosResponse<T>> {
    const service = this.create(headers);

    return service.request({
      method: 'DELETE',
      url: `${this.url}${path}`,
      data: {
        ...data
      },
      params
    });
  }
}

export default new RestAPI();
