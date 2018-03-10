import React from 'react';
import WithLoader from 'decorators/with-loader';

export default ({
  loading,
  error,
  components: { Filter, List, Pagination }
}) => {
  const CustomList = WithLoader(List);
  return (
    <div className="custom grid">
      <Filter />
      <CustomList className="list-container" loading={loading} error={error} />
      {error ? null : <Pagination />}
    </div>
  );
};
