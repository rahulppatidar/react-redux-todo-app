import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid';
import {addTodoAction} from '../actions/todoAction';

class AddTodo extends Component{
onSubmit(event){
  event.preventDefault();
  if(this.todotitle.value=="") {
    return;
  }
  const newTodo={
    id: uuid.v4(),
    title: this.todotitle.value
  };
//  console.log(newTodo);
  this.props.setTodo(newTodo);
  this.todotitle.value='';

}
  render(){
    return(
      <div className='addtodo'>
        <form className="addtodoform form-inline" ref='addtodo' onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <fieldset>
          <input type="text" ref={ todotitle => this.todotitle = todotitle }  className="form-control" placeholder="Enter Todo"/>
          <button className="btn btn-outline-primary">Add</button>
          </fieldset>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos:state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTodo:(todo)=>{
      dispatch(addTodoAction(todo))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);
