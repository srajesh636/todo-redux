import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.css";
class ListItem extends React.Component {
  render() {
    let now=new Date();
    let deadline=new Date(this.props.data.deadline);

componentDidMount()=>{
  setInterval(function(){
    // if(now === deadline){
    //   alert('time over',this.props.data.keyword);
    // }
    alert('hello');
  },1000);
}
    return (
      <div className="list-item">
        <h4>{this.props.data.message}</h4>

        <div class="float-left">{this.props.data.keyword}</div><br/>
          <div class="float-left">{this.props.data.deadline}</div>

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
