import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let Form = ({dispatch}) => {
  let input;

  const onSubmit = (event) => {
    event.preventDefault();

    if( !input.value.trim() ) return;

    dispatch(addTodo(input.value));
    input.value = '';
  }
  return (
    <form className="addform" onSubmit={onSubmit}>
      <input type="text" ref={node => {
        input = node;
      }} />
      <button>Add</button>
    </form>
  );
}


Form = connect()(Form);
export default Form;