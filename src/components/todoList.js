import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {deleteTodoAction, editTodoAction} from '../actions/todoAction';

class  TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      filter:'all'
    }
  }
  onDelete(id){
    this.props.deleteTodo(id);
  }
  onEdit(todo){
      this.props.editTodo(todo);
  }
  onComplete(todo){
    console.log(todo);
    this.props.editTodo(todo);
  }
  onFilter(filter){
    const state = this.state;
    state.filter=filter;
    this.setState(state);
  }
  render(){
    {if(!this.props.todos) return 'No List';
    }
    return(
      <div className="todolistbox">

      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-info active">
          <input onClick={this.onFilter.bind(this,'all')} type="radio" name="options" id="option1" autoComplete="off" /> All
        </label>
        <label className="btn btn-primary">
          <input onClick={this.onFilter.bind(this,'active')} type="radio" name="options" id="option2" autoComplete="off" /> Active
        </label>
        <label className="btn btn-warning">
          <input onClick={this.onFilter.bind(this,'complete')} type="radio" name="options" id="option3" autoComplete="off" /> Complete
        </label>
      </div>
      <br/><br/>

      <div className="todoList">
      <ul className="list-group">
          {
            this.props.todos.todos.map(todo => {
            //return <li key={todo.id}> {todo.title} </li>;
            return this.state.filter==="complete" && todo.isComplete ? <TodoItem key={todo.id} todo={todo} onDelete={this.onDelete.bind(this)}
            onEdit={this.onEdit.bind(this)} onComplete={this.onComplete.bind(this)}/> :
            this.state.filter==="active" && !todo.isComplete ? <TodoItem key={todo.id} todo={todo} onDelete={this.onDelete.bind(this)}
            onEdit={this.onEdit.bind(this)} onComplete={this.onComplete.bind(this)}/> :
            this.state.filter==="all" ? <TodoItem key={todo.id} todo={todo} onDelete={this.onDelete.bind(this)}
            onEdit={this.onEdit.bind(this)} onComplete={this.onComplete.bind(this)}/> : ""
          })}
          </ul>
      </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    todos:state.todos
  };
}

const mapDispatchToProps = (dispatch) =>{
  return{
    deleteTodo: id => dispatch(deleteTodoAction(id)),
    editTodo: todo => dispatch(editTodoAction(todo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
