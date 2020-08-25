import React, {Component} from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';
import MyComponent from './MyComponent';
import ScrollBox from './ScrollBox';

class App extends Component {

  state ={
    counter:1,
    error:false
  }

  constructor(props){
    super(props);
    console.log('constuctor');
  }

  componentDidMount(){
    console.log('componentDidMount');
    console.log(this.myDiv.getBoundingClientRect().height);
  }

  componentDidCatch(error, info){
    console.log(error);
    console.log(info);

    this.setState({
      error : false
    });
    // API를 통해서 서버를 오류 내용 날리기
  }

  handleClick = () => {
    this.setState({
      counter : this.state.counter+1
    })
  }

  render() {
    return (
      <div ref={ref => this.myDiv = ref}>
        <MyName name="리액트"></MyName>
        <Counter></Counter>
        { this.state.counter < 10 && <MyComponent value = {this.state.counter}></MyComponent>}
        <button onClick ={this.handleClick}>click me!</button>
        <ScrollBox></ScrollBox>
      </div>
    );
  }
}

export default App;
