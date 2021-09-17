import React, { FC } from 'react';
import Button from '../Button';

import styles from './Content.module.scss';

interface ContentAddItemProps {
  onClickButton?: () => void;
  onCloseModal?: () => void;
}

const addNewItem = () => {
  console.log('Add New item');
};

const ContentAddItem: FC<ContentAddItemProps> = ({ onCloseModal }) => {
  return (
    <form className={styles.addNewTask}>
      <input className={styles.input} type="text" placeholder="Текст задачи" />
      <div className={styles.wrapperBtn}>
        <Button name="Добавить задачу" className={styles.addBtn} onClickButton={addNewItem} />
        <Button name="Отмена" bg="primary" onClickButton={onCloseModal} />
      </div>
    </form>
  );
};

export default ContentAddItem;
