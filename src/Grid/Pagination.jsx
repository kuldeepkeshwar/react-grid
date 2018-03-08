import React from 'react';
export default class Paginaton extends React.Component {
  constructor() {
    super();
    this.onPrevious = this.onPrevious.bind(this);
    this.onNext = this.onNext.bind(this);
  }
  onPrevious() {
    if (this.props.current > 1) {
      this.props.changePage(this.props.current - 1);
    }
  }
  onNext() {
    if (this.props.current < this.props.total) {
      this.props.changePage(this.props.current + 1);
    }
  }
  render() {
    const { total, current } = this.props;
    return (
      <div className="pagination">
        <span>
          <a class="prev" onClick={this.onPrevious}>
            Previous
          </a>
        </span>

        <ul>
          <li>
            <a>
              {current} of {total}
            </a>
          </li>
        </ul>
        <span>
          <a class="next" onClick={this.onNext}>
            Next
          </a>
        </span>
      </div>
    );
  }
}
