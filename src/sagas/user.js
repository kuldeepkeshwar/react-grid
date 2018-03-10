import { takeLatest, put, select } from 'redux-saga/effects';
import { types, selectors, actions } from 'reducers/user';
import { fetchUser } from 'lib/api';
import { apiCaller } from 'lib/utils';

const limit = 10;
const userApi = apiCaller(
  fetchUser,
  resp => {
    const total = Math.ceil(resp.total / limit);
    return actions.userSuccess({
      data: resp.data,
      total
    });
  },
  actions.userError
);

function* userWorker(action) {
  const { filters, pagination: { current } } = yield select(selectors.getState);
  const offset = Math.max(current - 1, 0) * limit;
  yield put(actions.fetchUser());
  yield userApi({ limit, offset, filters });
}
function* changeFilterWorker(action) {
  yield put(actions.changePage(1));
}

export default function* watcher() {
  yield takeLatest(types.CHANGE_FILTER, changeFilterWorker);
  yield takeLatest(types.CHANGE_PAGE, userWorker);
}
