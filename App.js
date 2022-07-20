import "./App.css";
import React from "react";
import {Header} from "./Components/Header";
import CHeader from "./Components/CHeader";
import Channel from "./Components/Channel";
import FunctionClick from "./Components/FunctionClick";
import CFunctionClick from "./Components/CFunctionClick";
import CFunc from "./Components/CFunc";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Class Component</h1>
        <Header name="John" last="Reigns">
          <p>John Reigns is a fantastic Person</p>
          </Header>
        <Header name="Anna" last="Styles"/>
        <Header name="Harry"/>
        <CHeader name="Mery" last="Jacks"/>
        <Channel/>
        <FunctionClick/>
        <CFunctionClick roll="22"/>
        <CFunc/>
      </div>
      
    );
  }
}

export default App;
