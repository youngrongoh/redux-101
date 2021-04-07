import { configureStore, createSlice } from '@reduxjs/toolkit';
import LocalStore from './localstore';

const localStore = new LocalStore();

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
      localStore.saveToLocal('toDos', state);
    },
    remove: (state, action) => {
      const filtered = state.filter(({ id }) => id !== action.payload);
      localStore.saveToLocal('toDos', filtered);
      return filtered;
    },
    loadFromLocal: () => localStore.loadFromLocal('toDos'),
  },
});

export const { add, remove, loadFromLocal } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
