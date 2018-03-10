import { apiTypeCreator, simpleActionCreator } from 'lib/utils';
const intialState = {
  filters: {
    id: ''
  },
  data: [],
  loading: false,
  error: false,
  pagination: {
    current: 0,
    total: 0
  }
};
const userTypes = apiTypeCreator('USER');
const types = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  CHANGE_PAGE: 'CHANGE_PAGE',
  ...userTypes
};

const actions = {
  changeFilter: simpleActionCreator(types.CHANGE_FILTER),
  changePage: simpleActionCreator(types.CHANGE_PAGE),
  fetchUser: simpleActionCreator(types.USER.FETCH),
  userSuccess: simpleActionCreator(types.USER.SUCCESS),
  userError: simpleActionCreator(types.USER.ERROR)
};
const selectors = {
  getState: state => state.app.user
};
export default (state = intialState, { type, payload }) => {
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
    case types.USER.FETCH: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false
      };
    }
    case types.USER.SUCCESS: {
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
    case types.USER.ERROR: {
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
export { actions, selectors, types };
