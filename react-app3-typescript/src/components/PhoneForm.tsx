import * as React from "react";

interface Props {
  onCreate(name: string, phone: string): void;
}

interface State {
  name: string;
  phone: string;
}

export class PhoneForm extends React.Component<Props, State> {
  // input: React.RefObject<HTMLInputElement> = React.createRef();
  // private inputRef = React.createRef<HTMLInputElement>();
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.inputRef = React.createRef();
  }

  state = {
    name: "",
    phone: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent): void => {
    const { name, phone } = this.state;
    e.preventDefault();
    this.props.onCreate(name, phone);
    this.setState({
      name: "",
      phone: "",
    });
    this.inputRef.current?.focus();
  };

  render() {
    const { name, phone } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="이름"
            value={name}
            onChange={this.handleChange}
            ref={this.inputRef}
          ></input>
          <input
            name="phone"
            placeholder="전화번호"
            value={phone}
            onChange={this.handleChange}
          ></input>
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
