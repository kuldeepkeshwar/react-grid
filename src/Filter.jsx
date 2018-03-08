import React from 'react';
export default class Filter extends React.Component {
  changeFilter = () => {
    this.props.changeFilter({
      id: 101
    });
  };
  render() {
    return (
      <div className="filter">
        <button onClick={this.changeFilter}>Apply Filter</button>
      </div>
    );
  }
}
