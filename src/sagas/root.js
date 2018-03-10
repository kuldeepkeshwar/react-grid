import { all } from 'redux-saga/effects';
import UserSaga from './user';

export default function* rootSaga() {
  yield all([UserSaga()]);
}
