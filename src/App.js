import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import List from "./components/List";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="gif">
          <img src="https://cdn.dribbble.com/users/1235346/screenshots/3252385/job.gif" />
         </div>
         <div className="content">
        <Form />
        <List />
        </div>
      </div>
    );
  }
}

export default connect()(App);
