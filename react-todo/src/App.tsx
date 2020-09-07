import React from "react";
import { KContent } from "./class/KContent";
import PhoneInfoList from "./components/PhoneInfoList";
import TodoAppBar from "./components/TodoAppBar";
import AddButtonDialog from "./components/AddButtonDialog";
import axios, { AxiosResponse } from "axios";
import { TTContent } from "./http/TTContent";
import { TTKContent } from "./http/TTKContent";

interface Props {}

interface State {
  information: KContent[];
  keyword: string;
  tmp: KContent[];
}

export class App extends React.Component<Props, State> {
  id: number = 0;

  state = {
    information: [
      new KContent("0", "밥먹기", "밥을 맛있게 먹자"),
      new KContent("0", "공부하기", "공부를 열심히 하자"),
      new KContent("0", "잠자기", "잠을 푹 자자"),
      new KContent("0", "프로젝트하기", "프로젝트를 같이 열심히 하자"),
      new KContent("0", "놀기", "재밌게 놀자"),
      new KContent("0", "살기", "열심히 살자"),
    ],
    keyword: "",
    tmp: [],
  };

  componentDidMount() {
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
      .post(
        "https://skhu-pwk.firebaseio.com/todo0.json",
        // new Content(id, name, phone)
        { name: _name, phone: _phone }
      )
      .then((response) => this.reloadTodo());
  };

  updateTodo = (key: string, _name: string, _phone: string) => {
    axios
      .put("https://skhu-pwk.firebaseio.com/todo0/" + key + "/.json", {
        name: _name,
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
            .filter((info) => info.getContent.indexOf(keyword) > -1)
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
