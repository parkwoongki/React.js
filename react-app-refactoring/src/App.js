import React, { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.info = {};
    this.max_content_id = 2;
    this.state = {
      mode: "welcome",
      selected_content_id: 1,
      subject: { title: "WEB", sub: "World Wide Web" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 0, title: "HTML", desc: "HTML is for information" },
        { id: 1, title: "CSS", desc: "CSS is for design" },
        { id: 2, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }

  handleCreate = (_title, _desc) => {
    this.max_content_id = this.max_content_id + 1;
    var _contents = this.state.contents.concat({
      id: this.max_content_id,
      title: _title,
      desc: _desc,
    });
    this.setState({
      contents: _contents,
      mode: "read",
      selected_content_id: this.max_content_id,
    });
  };

  handleUpdate = (_id, _title, _desc) => {
    // var _contents = Array.from(this.state.contents); // 복제해서 새로운 배열, 불변
    // var i = 0;
    // while (i < _contents.length) {
    //   if (_contents[i].id === _id) {
    //     _contents[i] = { id: _id, title: _title, desc: _desc };
    //     break;
    //   }
    //   i++;
    // }
    // this.setState({
    //   contents: _contents,
    //   mode: "read",
    // });

    const { contents } = this.state;
    let _contents = Array.from(contents);

    this.setState({
      contents: _contents.map((info) => {
        if (info.id === _id) {
          _contents[_id].title = _title;
          _contents[_id].desc = _desc;
        }
        return info;
      }),
      mode: "read",
    });
    console.log(_contents);
  };

  getReadContent() {
    const { contents, selected_content_id } = this.state;

    contents.forEach((data) => {
      if (data.id === selected_content_id) {
        this.info = data;
      }
    });
  }

  getContent() {
    const { mode, welcome } = this.state;
    let _article;

    if (mode === "welcome") {
      _article = (
        <ReadContent title={welcome.title} desc={welcome.desc}></ReadContent>
      );
    } else if (mode === "read") {
      this.getReadContent();
      // console.log("read" + this.info.title + this.info.desc);
      _article = (
        <ReadContent
          title={this.info.title}
          desc={this.info.desc}
        ></ReadContent>
      );
    } else if (mode === "create") {
      _article = <CreateContent onSubmit={this.handleCreate}></CreateContent>;
    } else if (mode === "update") {
      this.getReadContent();
      _article = (
        <UpdateContent
          data={this.info}
          onSubmit={this.handleUpdate}
        ></UpdateContent>
      );
    }

    return _article;
  }

  handleChangePage = (e) => {
    this.setState({
      mode: "welcome",
    });
  };

  render() {
    const { subject } = this.state;
    return (
      <div className="App">
        <Subject
          title={subject.title}
          sub={subject.sub}
          onChangePage={this.handleChangePage}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really?")) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i++;
                }
                this.setState({
                  mode: "welcome",
                  contents: _contents,
                });
              }
            } else {
              this.setState({
                mode: _mode,
              });
            }
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
