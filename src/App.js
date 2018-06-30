import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ListItem  from './listitem';
import Edit from './edit.js'
class App extends Component {
  onClick(e) {
    e.preventDefault();
    let keyword = this.getTitle.value;
    const data = {
      id: new Date(),
      keyword,
      editing:false
    };
    this.props.dispatch({
      type: "ADD",
      payload: data
    });
    this.getTitle.value='';
  }
  render() {
    let list = this.props.store.map((data, index) => {
      return (
        <div key={data.id}>
          {data.editing ? <Edit data={data} />: <ListItem data={data} />}

        </div>
      );
    });

    return (
      <div className="App">
        <div className="input-group">
          <input type="text" ref={input => (this.getTitle = input)} />
          <button  onClick={this.onClick.bind(this)} >
            ADD
          </button>
        </div>
        <div className="list">{list}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    store: state
  };
};

export default connect(mapStateToProps)(App);
