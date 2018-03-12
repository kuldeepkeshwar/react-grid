import { apiTypeCreator, simpleActionCreator } from 'lib/utils';
import { takeLatest, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { apiCaller, gridResponseParser } from 'lib/utils';

export default (type, intialState, { limit, api, baseState }) => {
  const TYPE = type.toUpperCase();
  const apiTypes = apiTypeCreator(TYPE);
  const types = {
    CHANGE_FILTER: `${TYPE}_CHANGE_FILTER`,
    CHANGE_PAGE: `${TYPE}_CHANGE_PAGE`,
    ...apiTypes
  };

  const actions = {
    changeFilter: simpleActionCreator(types.CHANGE_FILTER),
    changePage: simpleActionCreator(types.CHANGE_PAGE),
    fetch: simpleActionCreator(types[TYPE].FETCH),
    fetchSuccess: simpleActionCreator(types[TYPE].SUCCESS),
    fetchError: simpleActionCreator(types[TYPE].ERROR)
  };
  const selectors = {
    getState: state => baseState(state)[type]
  };
  const reducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case types.CHANGE_FILTER: {
        return {
          ...state,
          filters: payload
        };
      }
      case types.CHANGE_PAGE: {
        return {
          ...state,
          pagination: {
            ...state.pagination,
            current: payload
          }
        };
      }
      case types[TYPE].FETCH: {
        return {
          ...state,
          data: [],
          loading: true,
          error: false
        };
      }
      case types[TYPE].SUCCESS: {
        const { data, total } = payload;
        return {
          ...state,
          data,
          loading: false,
          error: false,
          pagination: {
            ...state.pagination,
            total
          }
        };
      }
      case types[TYPE].ERROR: {
        return {
          ...state,
          data: null,
          loading: false,
          error: true,
          pagination: {
            current: 0,
            total: 0
          }
        };
      }
      default:
        return state;
    }
  };

  const fetchApi = apiCaller(
    api,
    gridResponseParser(limit, actions.fetchSuccess),
    actions.fetchError
  );

  function* worker(action) {
    const { filters, pagination: { current } } = yield select(
      selectors.getState
    );
    const offset = Math.max(current - 1, 0) * limit;
    yield put(actions.fetch());
    yield delay(200);
    yield fetchApi({ limit, offset, filters });
  }
  function* changeFilterWorker(action) {
    yield put(actions.changePage(1));
  }

  const saga = function* watcher() {
    yield takeLatest(types.CHANGE_FILTER, changeFilterWorker);
    yield takeLatest(types.CHANGE_PAGE, worker);
  };
  return {
    actions,
    selectors,
    types,
    saga,
    reducer: { [type]: reducer }
  };
};
