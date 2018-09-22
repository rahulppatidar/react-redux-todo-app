import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/todoConstants';

export const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    payload:todo
  }
}

export const deleteTodoAction = (todo) => {
  return{
    type: DELETE_TODO,
    payload:todo
  }
}
export const editTodoAction = (todo) => {
  return{
    type: EDIT_TODO,
    payload:todo
  }
}
