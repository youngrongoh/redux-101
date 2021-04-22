import {createStore} from 'redux';

const plus = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

// reducer는 데이터 변화 및 수정을 담당하는 곳, 변화시킨 데이터를 반환
// action은 reducer와 소통하는 매개가 됨
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    console.log('they are telling me to add one')
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
}

// store는 데이터(상태)를 저장하는 곳
const countStore = createStore(countModifier);

// dispatch를 사용하여 reducer에 action을 보냄
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'ADD' })
countStore.dispatch({ type: 'MINUS' })

console.log(countStore.getState());