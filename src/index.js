import { createStore } from 'redux';
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

number.textContent = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  const count = countStore.getState();
  number.textContent = count;
};

countStore.subscribe(onChange);

const hanldeAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', hanldeAdd);
minus.addEventListener('click', handleMinus);
