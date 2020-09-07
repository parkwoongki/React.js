import React, { Fragment } from "react";
import { Content } from "../class/Content";

interface Props {
  info: Content;
  onRemove(id: number): void;
  onUpdate(id: number, name: string, phone: string): void;
}

interface State {
  editing: boolean;
  name: string;
  phone: string;
}

export class PhoneInfo extends React.Component<Props, State> {
  state = {
    editing: false,
    name: "",
    phone: "",
  };

  handleRemove = (): void => {
    const { info, onRemove } = this.props;
    onRemove(info.getId);
  };

  handleUpdate = (): void => {
    const { info, onUpdate } = this.props;
    const { name, phone } = this.state;

    if (this.state.editing) {
      onUpdate(info.getId, name, phone);
    } else {
      this.setState({
        name: info.getName,
        phone: info.getContent,
      });
    }

    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState(({
      [e.target.name]: e.target.value,
    } as unknown) as Pick<State, keyof State>);
  };

  render() {
    const { info } = this.props;
    const { editing, name, phone } = this.state;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };

    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            <input
              name="name"
              placeholder="이름"
              value={name}
              onChange={this.handleChange}
            ></input>
            <input
              name="phone"
              placeholder="전화번호"
              value={phone}
              onChange={this.handleChange}
            ></input>
          </Fragment>
        ) : (
          <Fragment>
            {info.getName} {info.getContent}
          </Fragment>
        )}

        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleUpdate}>{editing ? "적용" : "수정"}</button>
      </div>
    );
  }
}

export default PhoneInfo;
