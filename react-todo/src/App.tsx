import React from "react";
import { Content } from "./class/Content";
import PhoneInfoList from "./components/PhoneInfoList";
import TodoAppBar from "./components/TodoAppBar";
import AddButtonDialog from "./components/AddButtonDialog";
import axios, { AxiosResponse } from "axios";
import { TTContent } from "./http/TTContent";

interface Props {}

interface State {
  mode: string;
  information: Content[];
  keyword: string;
}

export class App extends React.Component<Props, State> {
  id: number = 0;

  constructor(props: Props) {
    super(props);
    this.getTodoList();
  }

  state = {
    mode: "list",
    information: [
      // new Content(0, "밥먹기", "밥을 맛있게 먹자"),
      // new Content(1, "공부하기", "공부를 열심히 하자"),
      // new Content(2, "잠자기", "잠을 푹 자자"),
      // new Content(3, "프로젝트하기", "프로젝트를 같이 열심히 하자"),
      // new Content(4, "놀기", "재밌게 놀자"),
      // new Content(5, "살기", "열심히 살자"),
    ],
    keyword: "",
    tmp: [],
  };

  componentDidMount() {
    this.getTodoList();
  }

  getTodoList = () => {
    axios
      .get<Content[]>("https://skhu-pwk.firebaseio.com/todo.json")
      .then((r: AxiosResponse<Content[]>) => {
        let res = TTContent(r.data);
        this.id = res.i;
        this.setState({
          information: res.list as any[],
        });
      });
  };

  createTodo = (id: number, name: string, phone: string) => {
    axios
      .post(
        "https://skhu-pwk.firebaseio.com/todo.json",
        new Content(id, name, phone)
      )
      .then((response) => this.getTodoList());

    // .get<Content[]>("https://skhu-pwk.firebaseio.com/todo.json")
    // .then((r: AxiosResponse<Content[]>) => {
    //   let res = TTContent(r.data);
    //   this.id = res.i;
    //   this.setState({
    //     information: res.list,
    //   });
    // });
  };

  handleCreate = (name: string, phone: string): void => {
    const { information } = this.state;
    const list: Array<Content> = Array.from(information);
    this.setState({
      information: list.concat(new Content(this.id, name, phone)),
    });

    this.createTodo(this.id, name, phone);

    this.id++;
    console.log(information);
  };

  handleRemove = (id: number): void => {
    const { information } = this.state;
    const list: Array<Content> = Array.from(information);
    this.setState({
      information: list.filter((info) => info.getId !== id),
    });
  };

  handleUpdate = (id: number, name: string, phone: string): void => {
    console.log(id + " " + name + " " + phone);
    const { information } = this.state;
    const list: Array<Content> = Array.from(information);

    this.setState({
      information: list.map((info) => {
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

  handlekeywordFilter = (): Content[] => {
    const { information, keyword } = this.state;
    const list: Array<Content> = Array.from(information);
    return list.filter((info) => info.getContent.indexOf(keyword) > -1);
  };

  render() {
    const { information, keyword } = this.state;

    return (
      <div>
        <TodoAppBar onSearch={this.handleSearch}></TodoAppBar>
        <PhoneInfoList
          information={this.handlekeywordFilter()}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        ></PhoneInfoList>
        <AddButtonDialog onCreate={this.handleCreate}></AddButtonDialog>
      </div>
    );
  }
}

export default App;
