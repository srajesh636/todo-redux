import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";
import Edit from "./Edit";

class List extends React.Component {
  render() {
    let list = this.props.store.map((data, index) => {
      return (
        <div key={data.id}>
          {data.editing ? <Edit data={data} /> : <ListItem data={data} />}
        </div>
      );
    });
    return <div className="list">{list}</div>;
  }
}
const mapStateToProps = state => {
  return {
    store: state
  };
};

export default connect(mapStateToProps)(List);
