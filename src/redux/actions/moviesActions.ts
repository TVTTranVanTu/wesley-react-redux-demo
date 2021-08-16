import { moviesTypes } from '../actionTypes/moviesTypes';
import {
  FetchMoviesFailure,
  FetchMoviesFailurePayload,
  FetchMoviesRequest,
  FetchMoviesSuccess,
  FetchMoviesSuccessPayload,
} from '../types/types';

export const fetchMoviesRequest = (): FetchMoviesRequest => ({
  type: moviesTypes.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (payload: FetchMoviesSuccessPayload): FetchMoviesSuccess => ({
  type: moviesTypes.FETCH_MOVIES_SUCCESS,
  payload,
});
export const fetchMoviesFailure = (payload: FetchMoviesFailurePayload): FetchMoviesFailure => ({
  type: moviesTypes.FETCH_MOVIES_FAILURE,
  payload,
});
