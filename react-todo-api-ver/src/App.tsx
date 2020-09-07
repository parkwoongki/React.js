import React from "react";
import { KContent } from "./class/KContent";
import PhoneInfoList from "./components/PhoneInfoList";
import TodoAppBar from "./components/TodoAppBar";
import AddButtonDialog from "./components/AddButtonDialog";
import axios from "axios";
import { TTKContent } from "./method/TTKContent";
import { getDate } from "./method/GetDate";

interface Props {}

interface State {
  information: KContent[];
  keyword: string;
}

export class App extends React.Component<Props, State> {
  id: number = 0;

  state = {
    information: [],
    keyword: "",
  };

  componentDidMount() {
    console.log(getDate());
    this.reloadTodo();
  }

  reloadTodo = () => {
    axios.get("https://skhu-pwk.firebaseio.com/todo0.json").then((r) => {
      let res = TTKContent(r.data);
      console.log(res);
      this.setState({
        information: res,
      });
    });
  };

  createTodo = (_name: string, _phone: string) => {
    axios
      .post("https://skhu-pwk.firebaseio.com/todo0.json", {
        name: _name,
        date: getDate(),
        phone: _phone,
      })
      .then((response) => this.reloadTodo());
  };

  updateTodo = (key: string, _name: string, _phone: string) => {
    axios
      .put("https://skhu-pwk.firebaseio.com/todo0/" + key + "/.json", {
        name: _name,
        date: getDate() + "(수정)",
        phone: _phone,
      })
      .then((response) => this.reloadTodo());
  };

  removeTodo = (key: string) => {
    axios
      .delete("https://skhu-pwk.firebaseio.com/todo0/" + key + "/.json")
      .then((response) => this.reloadTodo());
  };

  handleCreate = (name: string, phone: string): void => {
    this.createTodo(name, phone);
  };

  handleRemove = (key: string): void => {
    this.removeTodo(key);
  };

  handleUpdate = (key: string, name: string, phone: string): void => {
    this.updateTodo(key, name, phone);
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
          information={information
            .filter(
              (info: KContent) =>
                info.getContent.indexOf(keyword) > -1 ||
                info.getName.indexOf(keyword) > -1
            )
            .reverse()}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList>
        <AddButtonDialog onCreate={this.handleCreate}></AddButtonDialog>
      </div>
    );
  }
}

export default App;
