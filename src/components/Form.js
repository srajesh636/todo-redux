import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Form extends React.Component {
  onClick(e) {
    e.preventDefault();
    let keyword = this.getTitle.value;
    const data = {
      id: new Date(),
      keyword,
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
        <input type="text" ref={input => (this.getTitle = input)} />
        <button onClick={this.onClick.bind(this)}>ADD</button>
      </div>
    );
  }
}

export default connect()(Form);
