import React, { Component } from 'react';

export class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="이름"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <input
            name="phone"
            placeholder="전화번호"
            onChange={this.handleChange}
            value={this.state.phone}
          ></input>
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
