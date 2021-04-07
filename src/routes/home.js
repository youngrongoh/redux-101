import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/todo';
import { add, loadFromLocal } from '../store';

function Home({ toDos, addToDo, loadFromLocal }) {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText('');
  }

  useEffect(() => {
    loadFromLocal();
  }, [loadFromLocal]);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(add(text)),
    loadFromLocal: () => dispatch(loadFromLocal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
