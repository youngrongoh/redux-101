import { createStore } from 'redux';
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ul = document.querySelector('.list');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (text) => ({ type: ADD_TODO, text });
const deleteToDo = (id) => ({ type: DELETE_TODO, id });

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDo = { text: action.text, id: Date.now() };
      return [newToDo, ...state];
    case DELETE_TODO:
      const cleaned = state.filter((todo) => todo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchDeleteToDo = (e) => {
  const id = +e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = 'DEL';
    button.addEventListener('click', dispatchDeleteToDo);
    li.id = toDo.id;
    li.textContent = toDo.text;
    li.appendChild(button);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  dispatchAddToDo(toDo);
  form.reset();
};

form.addEventListener('submit', onSubmit);
