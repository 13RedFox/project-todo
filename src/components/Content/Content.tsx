import React, { FC } from 'react';

import styles from './Content.module.scss';

interface Props {
  title: string;
}

const Content: FC<Props> = ({ title }) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default Content;
