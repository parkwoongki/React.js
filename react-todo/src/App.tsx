import React from "react";
import { Content } from "./class/Content";
import PhoneForm from "./components/PhoneForm";
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
  id = 3;

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

  handleCancel = (changedMode: string) => {
    this.setState({
      mode: changedMode,
    });
  };

  getPage(): JSX.Element {
    const { mode, information, keyword } = this.state;
    console.log(mode, information);
    let content = (
      <PhoneInfoList
        information={information.filter(
          (info) => info.getContent.indexOf(keyword) > -1
        )}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
      ></PhoneInfoList>
    );

    if (mode === "list") {
      content = (
        <PhoneInfoList
          information={information.filter(
            (info) => info.getContent.indexOf(keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList>
      );
    } else if (mode === "create") {
      content = (
        <PhoneForm
          onCreate={this.handleCreate}
          onCancel={this.handleCancel}
        ></PhoneForm>
      );
    }

    return content;
  }

  render() {
    const { information } = this.state;

    return (
      <div>
        <TodoAppBar onSearch={this.handleSearch}></TodoAppBar>
        {/* <PhoneForm onCreate={this.handleCreate}></PhoneForm> */}
        {/* <PhoneInfoList
          information={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList> */}
        {this.getPage()}
        {/* <AddTooltips onCreate={this.handleCreate}></AddTooltips> */}
        {/* <BottomAddButton onChangePage={this.handleChangeMode}></BottomAddButton> */}
        <AddButtonDialog onCreate={this.handleCreate}></AddButtonDialog>
      </div>
    );
  }
}

export default App;
