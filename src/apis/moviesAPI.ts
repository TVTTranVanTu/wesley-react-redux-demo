import { IMovie, ListResponse } from '../models/IMovie';
import axiosClient from './axiosClient';
const postsApi = {
  getAll(): Promise<ListResponse<IMovie>> {
    const url = '/movies';
    return axiosClient.get(url);
  },
};

export default postsApi;
