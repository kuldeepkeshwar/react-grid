import React from 'react';
export default ({
  data,
  filters,
  pagination,
  components: { Filter, List, Pagination }
}) => {
  return (
    <div className="custom grid">
      <Filter />
      <List />
      <Pagination />
    </div>
  );
};
