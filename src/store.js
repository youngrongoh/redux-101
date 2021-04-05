import { createStore } from 'redux';
import LocalStore from './localstore';

const localStore = new LocalStore();

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const LOAD_FROM_LOCAL = 'LOAD_FROM_LOCAL';

const addToDo = (text) => ({ type: ADD_TODO, text });
const deleteToDo = (id) => ({ type: DELETE_TODO, id: +id });
const loadFromLocal = () => ({ type: LOAD_FROM_LOCAL });

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const updated = [{ text: action.text, id: Date.now() }, ...state];
      localStore.saveToLocal('toDos', updated);
      return updated;
    case DELETE_TODO:
      const filtered = state.filter(({ id }) => id !== action.id);
      localStore.saveToLocal('toDos', filtered);
      return filtered;
    case LOAD_FROM_LOCAL:
      return localStore.loadFromLocal('toDos');
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
  loadFromLocal,
};

export default store;
