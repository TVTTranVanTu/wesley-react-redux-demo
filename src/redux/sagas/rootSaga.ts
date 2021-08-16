import { all, fork } from 'redux-saga/effects';
import postsSaga from './moviesSaga';
export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
