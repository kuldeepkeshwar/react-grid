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
import {
  actions as userActions,
  selectors as userSelectors
} from 'reducers/user';
import {
  actions as employeeActions,
  selectors as employeeSelectors
} from 'reducers/employee';
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
      Filter
    },
    headers: headers
  };
  static customMeta = {
    renderer: {
      Filter,
      List: CustomList,
      Pagination: CustomPagination,
      Layout: CustomLayout
    },
    headers: headers
  };
  componentDidMount() {
    this.props.changeUserPage(1);
    this.props.changeEmployeePage(1);
  }
  renderEmployee() {
    const {
      employee: { data, pagination, filters, loading, error }
    } = this.props;
    const { changeEmployeePage, changeEmployeeFilter } = this.props;
    return (
      <Grid
        meta={App.customMeta}
        onPageChange={changeEmployeePage}
        onFilterChange={changeEmployeeFilter}
        data={data}
        pagination={pagination}
        filters={filters}
        loading={loading}
        error={error}
      />
    );
  }
  renderUser() {
    const { user: { data, pagination, filters } } = this.props;
    const { changeUserPage, changeUserFilter } = this.props;
    return (
      <Grid
        meta={App.defaultMeta}
        onPageChange={changeUserPage}
        onFilterChange={changeUserFilter}
        data={data}
        pagination={pagination}
        filters={filters}
      />
    );
  }
  render() {
    return (
      <div style={styles}>
        <h2>Simple Grid Examples{'\u2728'}</h2>
        <h4>User Gird (Default)</h4>
        {this.renderUser()}
        <h4>Employee Gird (Custom)</h4>
        {this.renderEmployee()}
      </div>
    );
  }
}
const props = state => ({
  employee: {
    loading: employeeSelectors.getState(state).loading,
    error: employeeSelectors.getState(state).error,
    data: employeeSelectors.getState(state).data,
    pagination: employeeSelectors.getState(state).pagination,
    filters: employeeSelectors.getState(state).filters
  },
  user: {
    loading: userSelectors.getState(state).loading,
    error: userSelectors.getState(state).error,
    data: userSelectors.getState(state).data,
    pagination: userSelectors.getState(state).pagination,
    filters: userSelectors.getState(state).filters
  }
});
const actions = {
  changeUserPage: userActions.changePage,
  changeUserFilter: userActions.changeFilter,
  changeEmployeePage: employeeActions.changePage,
  changeEmployeeFilter: employeeActions.changeFilter
};
export default connect(props, actions)(App);
