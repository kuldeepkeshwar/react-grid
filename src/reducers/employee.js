import createGridReducer from 'lib/grid-reducer-creator';
import { fetchEmployee as api } from 'lib/api';

const limit = 10;
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
const { actions, selectors, types, reducer, saga } = createGridReducer(
  'employee',
  intialState,
  { limit, api, baseState: state => state.app }
);
export default reducer;
export { actions, selectors, types, saga };
