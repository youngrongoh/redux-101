const plus = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

let count = 0;

number.textContent = count;

const updateText = () => {
  number.textContent = count;
};

const handleAdd = () => {
  count++;
  updateText();
};

const handleMinus = () => {
  count--;
  updateText();
};

plus.addEventListener('click', handleAdd);

minus.addEventListener('click', handleMinus);
