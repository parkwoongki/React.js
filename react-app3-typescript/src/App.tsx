import React from "react";
import { Content } from "./class/Content";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

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

  handleRemove = (id: number): void => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.getId !== id),
    });
  };

  handleUpdate = (id: number, name: string, phone: string): void => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if (info.getId === id) {
          return new Content(id, name, phone);
        }
        return info;
      }),
    });
  };

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList
          information={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList>
      </div>
    );
  }
}

export default App;
