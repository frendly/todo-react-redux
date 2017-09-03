import React from 'react';

import Form from '../container/Form';
import List from '../container/List';
// import Menu from './Menu'

const App = () => {
  return (
    <section>
      {/* <Menu /> */}
      <h1>Todo list </h1>
      <Form />
      <List />
    </section>
  )
};

export default App;