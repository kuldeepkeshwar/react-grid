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

const types = {
  CHANGE_FILTER: 'CHANGE_FILTER',
  CHANGE_PAGE: 'CHANGE_PAGE',
  USER: {
    FETCH: 'USER_FETCH',
    SUCESS: 'USER_SUCESS',
    ERROR: 'USER_ERROR'
  }
};
const actions = {
  changeFilter: payload => ({
    type: types.CHANGE_FILTER,
    payload
  }),
  changePage: payload => ({
    type: types.CHANGE_PAGE,
    payload
  }),
  fetchUser: payload => ({
    type: types.USER.FETCH,
    payload
  }),
  userSuccess: payload => ({
    type: types.USER.SUCESS,
    payload
  }),
  userError: payload => ({
    type: types.USER.ERROR,
    payload
  })
};
const selectors = {
  getState: state => state.app.user
};
export default (state = intialState, { type, payload }) => {
  console.log(type, payload);
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
    case types.USER.SUCESS: {
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
