import {ADD_TODO , DELETE_TODO , EDIT_TODO} from '../constants/todoConstants';
import uuid from 'uuid';
const todosInitialState = {
  todos:[{id:uuid.v4(),title:"rahulppatidar"}]
}

export const todoReducer = ( state = todosInitialState, action) =>{
  switch (action.type) {
    case ADD_TODO:
        state = {
              ...state,
              todos: [...state.todos, action.payload]
            };
      break;
    case DELETE_TODO:
        let idx=state.todos.findIndex(todo => todo.id===action.payload);
        state = {...state};
        state.todos.splice(idx,1);
        break;
    case EDIT_TODO:
        console.log("Edit",action.payload);
        state = {...state};
        idx = state.todos.findIndex(todo => todo.id === action.payload.id);
        state.todos.splice(idx,1,action.payload);
        break;
    default:
        return state;
  }
  return state;
}
