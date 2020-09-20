import React from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [test3, setTest3] = React.useState();

  const test = () => {
    axios.get("https://skhu-pwk.firebaseio.com/todo0.json").then((r) => {
      let res = r.data;
      console.log(res);
      setTest3(res);
    });
  };

  return (
    <div className="App">
      {/* {test()} */}
      {/* <div>name : {test3.name}</div>
      <div>project : {test3.project}</div>
      <div>date : {test3.date}</div> */}
    </div>
  );
}

export default App;
