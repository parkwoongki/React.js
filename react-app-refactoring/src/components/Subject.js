import React, { Component } from "react";

class Subject extends Component {
  handleChangePage = (e) => {
    e.preventDefault();
    this.props.onChangePage();
  };

  render() {
    return (
      <header>
        <h1>
          <a href="/" onClick={this.handleChangePage}>
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
