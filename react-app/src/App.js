import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {

  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state ={
      mode : "create",
      selected_content_id:2,
      subject : {title:"WEB", sub:"World Wide Web"},
      welcome : {title:"Welcome", desc : "Hello, React!!"},
      contents : [
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    } // 내부적으로 사용할 상태
  } // 컴포넌트가 실행될때 construicor가 존재하면 얘가먼저 실행되서 초기화를 담당

  getReadContent(){
    var i=0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          return data;
        }
        i++;
      }
  }

  getContent(){
    var _title, _desc, _article, _content = null;

    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === "read"){
      _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if(this.state.mode === "create"){
      _article = <CreateContent onSubmit={function(_title, _desc){
        console.log(_title, _desc);
        this.max_content_id = this.max_content_id+1;
        // this.state.contents.push({id:this.max_content_id, title: _title, desc:_desc}); 
        // 그냥 이렇게하면 리액트가 모름
        var _contents = this.state.contents.concat({id:this.max_content_id, title: _title, desc:_desc});
        this.setState({
          contents : _contents
        });
      }.bind(this)}></CreateContent>
    } else if(this.state.mode === "update"){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_title, _desc){
        console.log(_title, _desc);
        this.max_content_id = this.max_content_id+1;
        var _contents = this.state.contents.concat({id:this.max_content_id, title: _title, desc:_desc});
        this.setState({
          contents : _contents
        });
      }.bind(this)}></UpdateContent>
    }

    return _article;
  }

  render() {
   
    return ( 
      <div className = "App" >
        {/* <Subject></Subject> */}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(e){
            this.setState({
              mode : "welcome"
            })
          }.bind(this)}>    
        </Subject>
         {/* <header>
          <h1>
            <a href="/" onClick={function(e){
              console.log(e);
              e.preventDefault();
              // this.state.mode = "welcome"; // 이건 바뀐건데 리액트가 모르는거임
              this.setState({
                mode : "welcome"
              });
            }.bind(this)}>{this.state.subject.title}</a>
          </h1>
          {this.state.subject.sub}
        </header> */}
        <TOC onChangePage={function(id){
            this.setState({
              mode : "read",
              selected_content_id : Number(id)
            })
          }.bind(this)}
          data={this.state.contents}>    
        </TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode : _mode
          });
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;