import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import List from "./components/List";
import Form from "./components/Form";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    );
  }
}

export default connect()(App);
