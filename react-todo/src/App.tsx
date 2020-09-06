import React from "react";
import { Content } from "./class/Content";
import PhoneInfoList from "./components/PhoneInfoList";
import TodoAppBar from "./components/TodoAppBar";
import AddButtonDialog from "./components/AddButtonDialog";

interface Props {}

interface State {
  mode: string;
  information: Content[];
  keyword: string;
}

export class App extends React.Component<Props, State> {
  id = 6;

  state = {
    mode: "list",
    information: [
      new Content(0, "박웅기", "01062508207"),
      new Content(1, "홍길동", "01062508333"),
      new Content(2, "키웅키", "01062508777"),
      new Content(3, "키웅키", "01062508777"),
      new Content(4, "키웅키", "01062508777"),
      new Content(5, "키웅키", "01062508777"),
    ],
    keyword: "",
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
    console.log(id + " " + name + " " + phone);
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

  handleSearch = (changedKeyword: string): void => {
    console.log(changedKeyword);
    this.setState({
      keyword: changedKeyword,
    });
  };

  render() {
    const { information, keyword } = this.state;

    return (
      <div>
        <TodoAppBar onSearch={this.handleSearch}></TodoAppBar>
        <PhoneInfoList
          information={information.filter(
            (info) => info.getContent.indexOf(keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList>
        <AddButtonDialog onCreate={this.handleCreate}></AddButtonDialog>
      </div>
    );
  }
}

export default App;
