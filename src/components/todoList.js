import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem';
import {deleteTodoAction, editTodoAction} from '../actions/todoAction';

class  TodoList extends Component {
  onDelete(id){
    this.props.deleteTodo(id);
  }
  onEdit(todo){
      this.props.editTodo(todo);
  }
  render(){
    {if(!this.props.todos) return 'No List';
    }
    return(
      <div className="todoList">
          {
            this.props.todos.todos.map(todo => {
            //return <li key={todo.id}> {todo.title} </li>;
            return <TodoItem key={todo.id} todo={todo} onDelete={this.onDelete.bind(this)}
            onEdit={this.onEdit.bind(this)}/>
          })}
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
