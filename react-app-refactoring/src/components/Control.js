import React, { Component } from "react";

class Control extends Component {
  handleChangeMode = (e) => {
    e.preventDefault();
    this.props.onChangeMode(e.target.name);
  };

  render() {
    return (
      <ul>
        <li>
          <a href="/create" name="create" onClick={this.handleChangeMode}>
            create
          </a>
        </li>
        <li>
          <a href="/update" name="update" onClick={this.handleChangeMode}>
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            name="delete"
            value="delete"
            onClick={this.handleChangeMode}
          ></input>
        </li>
      </ul>
    );
  }
}

export default Control;
