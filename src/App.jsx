import React from 'react';
import Grid from './Grid';
import Filter from './Filter';
import {
  List as CustomList,
  Pagination as CustomPagination,
  Layout as CustomLayout
} from 'custom';
import './styles.css';
import './custom/styles.css';
import { actions, selectors } from 'reducers/user';
import { connect } from 'react-redux';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const headers = [
  {
    key: 'id',
    label: 'Id'
  },
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'age',
    label: 'Age'
  },
  {
    key: 'city',
    label: 'City'
  }
];

class App extends React.Component {
  static limit = 10;
  static defaultMeta = {
    renderer: {
      filter: Filter
    },
    headers: headers
  };
  static customMeta = {
    renderer: {
      filter: Filter,
      list: CustomList,
      pagination: CustomPagination,
      layout: CustomLayout
    },
    headers: headers
  };
  componentDidMount() {
    this.props.changePage(1);
  }
  onFilterChange = filters => {
    this.props.changeFilter(filters);
  };
  onPageChange = page => {
    this.props.changePage(page);
  };
  render() {
    const { data, pagination, filters, loading, error } = this.props;
    return (
      <div style={styles}>
        <h2>Simple Grid Examples{'\u2728'}</h2>
        <h4>Gird (Default)</h4>
        <Grid
          meta={App.defaultMeta}
          onPageChange={this.onPageChange}
          onFilterChange={this.onFilterChange}
          data={data}
          pagination={pagination}
          filters={filters}
        />
        <h4>Gird (Custom)</h4>
        <Grid
          meta={App.customMeta}
          onPageChange={this.onPageChange}
          onFilterChange={this.onFilterChange}
          data={data}
          pagination={pagination}
          filters={filters}
          loading={loading}
          error={error}
        />
      </div>
    );
  }
}
const props = state => ({
  loading: selectors.getState(state).loading,
  error: selectors.getState(state).error,
  data: selectors.getState(state).data,
  pagination: selectors.getState(state).pagination,
  filters: selectors.getState(state).filters
});
export default connect(props, actions)(App);
