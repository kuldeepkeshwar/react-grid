import React from 'react';
import { render } from 'react-dom';
import Grid from './Grid';
import Filter from './Filter';
import { List, Pagination } from './Custom';
import './styles.css';
import './Custom/styles.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const props1 = {
  meta: {
    renderer: {
      filter: Filter
    },
    headers: [
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
    ]
  },
  filters: {
    id: 101
  },
  data: [
    {
      id: 101,
      name: 'john',
      age: 25,
      city: 'NY'
    }
  ],
  pagination: {
    current: 1,
    total: 100
  }
};
const props2 = {
  meta: {
    renderer: {
      filter: Filter,
      list: List,
      pagination: Pagination
    },
    headers: [
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
    ]
  },
  filters: {
    id: 101
  },
  data: [
    {
      id: 101,
      name: 'john',
      age: 25,
      city: 'NY'
    }
  ],
  pagination: {
    current: 1,
    total: 100
  }
};

const actions = {
  onFilterChange: filters => {
    console.log(filters);
  },
  onPageChange: page => {
    console.log(page);
  }
};
const App = () => (
  <div style={styles}>
    <h2>Simple Grid Examples{'\u2728'}</h2>
    <h4>Gird (Default Render)</h4>
    <Grid {...actions} {...props1} />
    <h4>Gird (Custom Renderer)</h4>
    <Grid {...actions} {...props2} />
  </div>
);

render(<App />, document.getElementById('root'));
