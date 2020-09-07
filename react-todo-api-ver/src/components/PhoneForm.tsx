import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Button, Paper } from "@material-ui/core";

interface Props {
  onCreate(name: string, phone: string, mode: string): void;
  onCancel(mode: string): void;
}

interface State {
  name: string;
  phone: string;
}

export class PhoneForm extends React.Component<Props, State> {
  // private inputRef: React.RefObject<HTMLInputElement>;

  // constructor(props: Props) {
  //   super(props);

  //   this.inputRef = React.createRef();
  // }

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
    this.props.onCreate(name, phone, "list");
    this.setState({
      name: "",
      phone: "",
    });
    // this.inputRef.current?.focus();
  };

  handleCancel = () => {
    this.props.onCancel("list");
  };

  render() {
    const style = {
      marginTop: "16px",
    };

    const style2 = {
      padding: "16px",
    };

    const { name, phone } = this.state;
    return (
      <Container maxWidth="md">
        <Paper style={style2} elevation={5}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              style={style}
              id="outlined-search"
              label="제목"
              type="search"
              variant="outlined"
              fullWidth
              name="name"
              placeholder="제목을 입력하세요."
              value={name}
              onChange={this.handleChange}
              // ref={this.inputRef}
            ></TextField>
            <TextField
              style={style}
              id="outlined-search"
              label="내용"
              type="search"
              variant="outlined"
              multiline
              rows={20}
              fullWidth
              name="phone"
              placeholder="내용을 입력하세요."
              value={phone}
              onChange={this.handleChange}
            ></TextField>
            <Button
              style={style}
              type="submit"
              variant="contained"
              color="primary"
            >
              등록
            </Button>
            <Button
              style={style}
              variant="contained"
              color="secondary"
              onClick={this.handleCancel}
            >
              취소
            </Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default PhoneForm;
