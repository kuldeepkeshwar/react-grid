import { all } from 'redux-saga/effects';
import UserSaga from './user';
import EmployeeSaga from './employee';
export default function* rootSaga() {
  yield all([UserSaga(), EmployeeSaga()]);
}
