import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import 'font-awesome/css/font-awesome.css';

class Form extends React.Component {
  onClick(e) {
    e.preventDefault();
    let keyword = this.getTitle.value;
    let message=this.getMessage.value;
    let deadline=this.deadline.value;
    console.log(deadline);
    const data = {
      id: new Date(),
      keyword,
      message,
      deadline,
      editing: false
    };
    this.props.dispatch({
      type: "ADD",
      payload: data
    });
    this.getTitle.value = "";
  }
  render() {
    return (
      <div className="input-group">

        <input id="title" placeholder="Title" type="text" ref={input => (this.getTitle = input)}  />

      <input id="message" placeholder= "Description" type="text" ref={input=>(this.getMessage = input)}  />
  <input type='datetime-local' id="date" ref={input=>(this.deadline = input)}/>
      <button  id="button-add"onClick={this.onClick.bind(this)}>+</button>


    </div>
    );
  }
}

export default connect()(Form);
