import { moviesTypes } from '../actionTypes/moviesTypes';
import { moviesActions, moviesState } from '../types/types';

const initialState: moviesState = {
  pending: false,
  movies: [],
  error: null,
};

const moviesReducer = (state = initialState, action: moviesActions) => {
  switch (action.type) {
    case moviesTypes.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case moviesTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        movies: action.payload.movies,
        error: null,
      };
    case moviesTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        pending: false,
        movies: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default moviesReducer;
