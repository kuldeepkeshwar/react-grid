import React from 'react';

class Filter extends React.Component {
  changeFilter = () => {
    this.props.updateFilters({
      id: 101
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.changeFilter}>Apply Filter</button>
      </div>
    );
  }
}
class Table extends React.Component {
  render() {
    return (
      <div>
        <div>headers...</div>
        <div>body...</div>
      </div>
    );
  }
}
class Paginaton extends React.Component {
  render() {
    return (
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    );
  }
}

class Grid extends React.Component {
  state = {
    filters: {},
    list: [],
    total: 100,
    pagination: {
      limit: 10,
      offset: 0
    }
  };
  render() {
    return (
      <div>
        <Filter />
        <Table />
        <Paginaton />
      </div>
    );
  }
}

export default Grid;
