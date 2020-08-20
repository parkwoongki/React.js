import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      subject : {title:"WEB", sub:"World Wide Web"},
      contents : [
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interactive"}
      ]
    } // 내부적으로 사용할 상태
  } // 컴포넌트가 실행될때 construicor가 존재하면 얘가먼저 실행되서 초기화를 담당

  render() {
    return ( 
      <div className = "App" >
        <Subject></Subject>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is not a programming language"></Content>
      </div>
    );
  }
}

export default App;