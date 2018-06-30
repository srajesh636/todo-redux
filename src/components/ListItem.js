import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class ListItem extends React.Component {
  render() {
    return (
      <div>
        <li>
          {this.props.data.keyword}
          <button
            onClick={() => {
              console.log(this.props.data.id);
              this.props.dispatch({
                type: "DELETE",
                id: this.props.data.id
              });
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              this.props.dispatch({
                type: "EDIT",
                payload: this.props.data.id
              });
            }}
          >
            edit
          </button>
        </li>
      </div>
    );
  }
}

export default connect()(ListItem);
