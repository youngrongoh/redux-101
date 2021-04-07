import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';
import LocalStore from './localstore';

const localStore = new LocalStore();

const addToDo = createAction('ADD_TODO');
const deleteToDo = createAction('DELETE_TODO');
const loadFromLocal = createAction('LOAD_FROM_LOCAL');

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      const updated = [{ text: action.payload, id: Date.now() }, ...state];
      localStore.saveToLocal('toDos', updated);
      return updated;
    case deleteToDo.type:
      const filtered = state.filter(({ id }) => id !== action.payload);
      localStore.saveToLocal('toDos', filtered);
      return filtered;
    case loadFromLocal.type:
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
