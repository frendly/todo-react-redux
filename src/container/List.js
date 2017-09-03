import { connect } from 'react-redux';
import React from 'react';
import ListItem from '../components/ListItem';

const List = ({store:list}) => {
  // console.log('--------------List---------------------');
  // console.log(list);
  // console.log('---------------------------------------');
  return (
    <ul className="list">{list.map( (item) => <ListItem key={item.id} item={item} /> )}</ul>
  );
}

export default connect(
  state => ({
    store: state.todoList
  })
)(List);