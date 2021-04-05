import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const addToDo = (text) => ({ type: ADD_TODO, text });
export const deleteToDo = (id) => ({ type: DELETE_TODO, id });

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
