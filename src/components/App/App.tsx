import React from 'react';
import Aside from '../Aside';
import Content from '../Content';

import styles from './App.module.scss';

export interface NewFolders {
  name: string;
  id: number;
  isActive: Boolean;
  color: string;
}
export interface Todo {
  name: string;
  id: number;
  isDone: Boolean;
}

const newFolders: NewFolders[] = [
  { name: 'Покупки', id: 1, isActive: false, color: '#42b883' },
  { name: 'Фронтенд', id: 2, isActive: false, color: '#64c4ed' },
  { name: 'Фильмы и сер...', id: 3, isActive: false, color: '#ffbbcc' },
  { name: 'Книги', id: 4, isActive: false, color: '#b6e6bd' },
  { name: 'Личное', id: 5, isActive: false, color: '#c9d1d3' },
];

const todos: Todo[] = [
  { name: 'Изучить JavaScript', id: 1, isDone: false },
  { name: 'Изучить паттерны проектирования', id: 2, isDone: false },
  { name: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)', id: 3, isDone: false },
  { name: 'Redux (redux-observable, redux-saga)', id: 4, isDone: false },
];

function App() {
  return (
    <div className={styles.wrapper}>
      <Aside newFolders={newFolders} />
      <Content title="Фронтенд" todos={todos} />
    </div>
  );
}

export default App;
