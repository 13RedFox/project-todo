import React from 'react';
import Aside from '../Aside';
import Content from '../Content';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Aside />
      <Content title="Фронтенд" />
    </div>
  );
}

export default App;
