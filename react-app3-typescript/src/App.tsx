import React from "react";
import { Content } from "./class/Content";
import PhoneForm from "./components/PhoneForm";

interface Props {}

interface State {
  information: Content[];
}

export class App extends React.Component<Props, State> {
  id = 3;

  state = {
    information: [
      new Content(0, "박웅기", "01062508207"),
      new Content(1, "홍길동", "01062508333"),
      new Content(2, "키웅키", "01062508777"),
    ],
  };

  handleCreate = (name: string, phone: string): void => {
    const { information } = this.state;
    this.setState({
      information: information.concat(new Content(this.id++, name, phone)),
    });
    console.log(information);
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
      </div>
    );
  }
}

export default App;
