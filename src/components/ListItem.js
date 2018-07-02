import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.css";
import Push from 'push.js/bin/push.js';

class ListItem extends React.Component {
  componentDidMount() {
    const timer=setInterval(() => {
      this.checkDeadline();
    }, 1000);
  }

  checkDeadline = () => {
    let deadline = new Date(this.props.data.deadline);
    let now = new Date();
    let keyword=this.props.data.keyword;

    if (
      deadline.getFullYear() == now.getFullYear() &&
      deadline.getMonth() == now.getMonth() &&
      deadline.getDate() == now.getDate() &&
      now.getHours() == deadline.getHours() &&
      now.getMinutes() == deadline.getMinutes()
      && now.getSeconds()==deadline.getSeconds()
    ) {
         alert('timeover',keyword);
          Push.create('timeover ',keyword);

    }
  };
  render() {
    let deadline=new Date(this.props.data.dealine);


    return (
      <div className="list-item">
        <h4>{this.props.data.keyword}</h4>

        <div class="float-left">{this.props.data.message}</div>
        <br />
        <div class="float-left">{Date(this.props.data.deadline).replace("GMT+0530 (India Standard Time)"," ")}</div>

        <div className="button-group">
          <div className="button-group">
            <i
              className="fa fa-trash"
              onClick={() => {
                console.log(this.props.data.id);
                this.props.dispatch({
                  type: "DELETE",
                  id: this.props.data.id
                });
              }}
            />

            <i
              className="fa fa-pencil"
              onClick={() => {
                this.props.dispatch({
                  type: "EDIT",
                  payload: this.props.data.id
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ListItem);
