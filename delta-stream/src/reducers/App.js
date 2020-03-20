import React, { Fragment } from 'react';

import ToDo from '../components/todo/todo';
import Title from '../components/title/title';
import './App.scss';

const App = () => (
  <Fragment>
    <Title title="Список покупок" />
    <ToDo />
  </Fragment>
);

export default App;
