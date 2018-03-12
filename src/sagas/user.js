import { takeLatest, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { types, selectors, actions } from 'reducers/user';
import { fetchUser } from 'lib/api';
import { apiCaller, gridResponseParser } from 'lib/utils';

const limit = 10;
const userApi = apiCaller(
  fetchUser,
  gridResponseParser(limit, actions.fetchSuccess),
  actions.fetchError
);

function* userWorker(action) {
  const { filters, pagination: { current } } = yield select(selectors.getState);
  const offset = Math.max(current - 1, 0) * limit;
  yield put(actions.fetch());
  yield delay(200);
  yield userApi({ limit, offset, filters });
}
function* changeFilterWorker(action) {
  yield put(actions.changePage(1));
}

export default function* watcher() {
  yield takeLatest(types.CHANGE_FILTER, changeFilterWorker);
  yield takeLatest(types.CHANGE_PAGE, userWorker);
}
