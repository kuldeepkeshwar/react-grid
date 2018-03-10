import { put, call } from 'redux-saga/effects';

export const apiCaller = (api, success, failure) => {
  return function*(...args) {
    try {
      const result = yield call(api, ...args);
      yield put(success(result));
    } catch (error) {
      yield put(failure(error));
    }
  };
};
export const simpleActionCreator = type => payload => ({
  type,
  payload
});
export const apiTypeCreator = type => ({
  [type]: {
    FETCH: `${type}_FETCH`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`
  }
});

export const gridResponseParser = (limit, action) => resp => {
  const total = Math.ceil(resp.total / limit);
  return action({
    data: resp.data,
    total
  });
};
