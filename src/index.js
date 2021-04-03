import { createStore } from 'redux';
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

const countModifier = (count = 0, action) => {
  return count;
};

const countStore = createStore(countModifier);
