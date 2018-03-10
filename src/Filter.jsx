import React from 'react';
export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.filters };
  }
  changeFilter = () => {
    this.props.changeFilter(this.state);
  };
  handleTextBoxChange = event => {
    this.setState({
      id: (event.target.value-0)?event.target.value-0:''
    });
  };
  render() {
    const { id } = this.state;
    return (
      <div className="filter">
        <label>Id </label>
        <input
          name="id"
          type="text"
          value={id}
          onChange={this.handleTextBoxChange}
        />
        <button onClick={this.changeFilter}>Apply Filter</button>
      </div>
    );
  }
}
