import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

function ToDo({ text, onButtonClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onButtonClick}>DEL</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, { id }) => {
  return { onButtonClick: () => dispatch(actionCreators.deleteToDo(id)) };
};

export default connect(null, mapDispatchToProps)(ToDo);
