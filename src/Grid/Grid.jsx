import React from 'react';
import DefaultPagination from './Pagination';
import DefaultList from './List';
import DefaultLayout from './Layout';

class Grid extends React.Component {
  render() {
    const {
      meta: { headers, renderer },
      data,
      pagination,
      onFilterChange,
      onPageChange
    } = this.props;
    const Filter = renderer.filter;
    const List = renderer.list || DefaultList;
    const Pagination = renderer.pagination || DefaultPagination;
    const Layout = renderer.layout || DefaultLayout;

    return (
      <div className="grid">
        <Filter changeFilter={onFilterChange} />
        <List data={data} headers={headers} />
        <Pagination
          total={pagination.total}
          current={pagination.current}
          changePage={onPageChange}
        />
      </div>
    );
  }
}

export default Grid;
