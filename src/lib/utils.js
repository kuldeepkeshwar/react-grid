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
  FETCH: `FETCH_${type}`,
  SUCCESS: `FETCH_${type}_SUCCESS`,
  FAILURE: `FETCH_${type}_FAILURE`
});
