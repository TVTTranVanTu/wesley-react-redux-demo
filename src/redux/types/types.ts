import { IMovie } from '../../models/IMovie';
import { moviesTypes } from '../actionTypes/moviesTypes';

export interface moviesState {
  pending: boolean;
  movies: IMovie[];
  error: string | null;
}

export interface FetchMoviesSuccessPayload {
  movies: IMovie[];
}

export interface FetchMoviesFailurePayload {
  error: string;
}

export interface FetchMoviesRequest {
  type: typeof moviesTypes.FETCH_MOVIES_REQUEST;
}

export type FetchMoviesSuccess = {
  type: typeof moviesTypes.FETCH_MOVIES_SUCCESS;
  payload: FetchMoviesSuccessPayload;
};

export type FetchMoviesFailure = {
  type: typeof moviesTypes.FETCH_MOVIES_FAILURE;
  payload: FetchMoviesFailurePayload;
};

export type moviesActions = FetchMoviesRequest | FetchMoviesSuccess | FetchMoviesFailure;
