import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Edit extends React.Component {
  onClickHandler(e){
    e.preventDefault();
    const newMessage=this.newToDo.value;
    console.log(newMessage);
    const data={
      newMessage
    }
    this.props.dispatch({
      type:'UPDATE',
      data:data,
      id:this.props.data.id
    })
  }
  render () {
    return(<div>
        <input type="text" ref={(input)=>this.newToDo = input}/>
        <button onClick={this.onClickHandler.bind(this)}>update</button>
      </div>

    )
  }
}

export default connect()(Edit);
