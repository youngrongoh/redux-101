import {createStore} from 'redux';

const plus = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

// reducer는 데이터 변화 및 수정을 담당하는 곳, 변화시킨 데이터를 반환
const countModifier = (state = 0) => { 
  return state;
}

// store는 데이터(상태)를 저장하는 곳
const countStore = createStore(countModifier);

console.log(countStore.getState());