import React, { Component } from 'react';

class TOC extends Component{
  shouldComponentUpdate(newProps, newState){
    console.log(newProps.data, this.props.data);
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
  render(){

    var lists = [];
    var data = this.props.data;
    console.log("sdsd")
    data.forEach(function(element){
        lists.push(
        <li key={element.id}>
            <a 
                href={"/content/"+element.id}
                onClick={function(id, e){
                    e.preventDefault();
                    this.props.onChangePage(id);
                }.bind(this, element.id)}
            >{element.title}
            </a>
        </li>);
    }.bind(this));

    // var lists =[];
    // var data=this.props.data;
    // var i=0;
    // while(i<data.length){
    //     lists.push(
    //       <li key={data[i].id}>
    //         <a 
    //           href={"/content/"+data[i].id}
    //           // data-id={data[i].id}
    //           // onClick={function(e){
    //           //   e.preventDefault();
    //           //   this.props.onChangePage(e.target.dataset.id);
    //           // }.bind(this)}
    //           onClick={function(id, e){
    //             e.preventDefault();
    //             this.props.onChangePage(id);
    //           }.bind(this, data[i].id)}>
    //         {data[i].title}
    //         </a>
    //       </li>
    //     );
    //     i=i+1;
    // }
    return (
      <nav>
          <ul>
              {lists}
          </ul>
      </nav>
    );
  }
}

export default TOC;