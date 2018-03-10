import React from 'react';
export default ({ components: { Filter, List, Pagination } }) => (
  <div className="grid">
    <Filter />
    <List />
    <Pagination />
  </div>
);
