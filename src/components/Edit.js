import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Edit extends React.Component {
  onClickHandler(e) {
    e.preventDefault();
    const newMessage = this.newToDo.value;
    console.log(newMessage);
    const data = {
      newMessage
    };
    this.props.dispatch({
      type: "UPDATE",
      data: data,
      id: this.props.data.id
    });
  }
  render() {
    return (
      <div className="edit-list">
        <input type="text" className="edit-input" ref={input => (this.newToDo = input)} />
        <i className="fa check fa-check-circle" onClick={this.onClickHandler.bind(this)}></i>
      </div>
    );
  }
}

export default connect()(Edit);
