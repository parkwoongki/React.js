import React, { Component } from 'react'

export class MyComponent extends Component {

    state = {
        value : 0
    };

    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.value !== nextProps.value){
            return {
                value: nextProps.value
            }
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.value === 10)
            return false;
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.value !== prevProps.value){
            console.log('vlaue 값이 바뀌었다.', this.props.value)
        }
    }

    componentWillUnmount(){
        console.log('good bye');
    }

    render() {
        return (
            <div>
                {this.props.missing.sonething}
                <p>props : {this.props.value}</p>
                <p>state : {this.state.value}</p>
            </div>
        )
    }
}

export default MyComponent
