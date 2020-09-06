import React from "react";
import PersistentDrawerLeft from "./bars/PersistentDrawerLeft";
import { Content } from "./class/Content";

interface Props {}

interface State {
  todoList: Content[];
  counter: number;
}

export class App extends React.Component<Props, State> {
  id: number = 0;

  state = {
    todoList: [
      new Content(0, "박웅기", "안녕1"),
      new Content(1, "홍길동", "안녕2"),
      new Content(2, "웅기웅", "안녕3"),
    ],
    counter: 0,
  };

  render() {
    return (
      <div>
        <PersistentDrawerLeft />
      </div>
    );
  }
}

export default App;
