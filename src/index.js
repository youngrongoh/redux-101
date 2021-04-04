import { createStore } from 'redux';
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ul = document.querySelector('.list');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  store.dispatch({ type: ADD_TODO, text: toDo });
  form.reset();
};

form.addEventListener('submit', onSubmit);
