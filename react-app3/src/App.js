import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

export class App extends Component {
  id = 3;

  state = {
    information: [
      { id: 0, name: '홍길동', phone: '010-0000-0001' },
      { id: 1, name: '박웅기', phone: '010-0000-0002' },
      { id: 2, name: '웅기웅', phone: '010-0000-0003' },
    ],
    keyword: '',
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      }),
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.data;
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        ></input>
        <PhoneInfoList
          data={this.state.information.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1,
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList>
      </div>
    );
  }
}

export default App;
