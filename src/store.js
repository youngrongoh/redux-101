import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';
import LocalStore from './localstore';

const localStore = new LocalStore();

const addToDo = createAction('ADD_TODO');
const deleteToDo = createAction('DELETE_TODO');
const loadFromLocal = createAction('LOAD_FROM_LOCAL');

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
    localStore.saveToLocal('toDos', state);
  },
  [deleteToDo]: (state, action) => {
    const filtered = state.filter(({ id }) => id !== action.payload);
    localStore.saveToLocal('toDos', filtered);
    return filtered;
  },
  [loadFromLocal]: () => localStore.loadFromLocal('toDos'),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
  loadFromLocal,
};

export default store;
