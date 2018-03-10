import React from 'react';
import DefaultPagination from './Pagination';
import DefaultList from './List';
import DefaultLayout from './Layout';
import withProps from 'decorators/with-props';

const Grid = ({
  meta: { headers, renderer },
  data,
  filters,
  pagination,
  onFilterChange,
  onPageChange,
  ...rest
}) => {
  const Filter = renderer.filter;
  const List = renderer.list || DefaultList;
  const Pagination = renderer.pagination || DefaultPagination;
  const Layout = renderer.layout || DefaultLayout;
  const props = {
    ...rest,
    data,
    filters,
    pagination,
    components: {
      Filter: withProps(Filter, {
        filters,
        changeFilter: onFilterChange
      }),
      List: withProps(List, {
        data,
        headers
      }),
      Pagination: withProps(Pagination, {
        total: pagination.total,
        current: pagination.current,
        changePage: onPageChange
      })
    }
  };
  return <Layout {...props} />;
};

export default Grid;
