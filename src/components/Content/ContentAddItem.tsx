import React, { FC } from 'react';
import Button from '../Button';

import styles from './Content.module.scss';

interface ContentAddItemProps {
  onClickButton?: () => void;
  onCloseModal?: () => void;
}

const handleSubmit = (event: React.SyntheticEvent) => {
  event.preventDefault();
};

const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
  let value = e.target.value;
  return value;
};

const addNewItem = () => {
  console.log(inputValue);
};

const ContentAddItem: FC<ContentAddItemProps> = ({ onCloseModal }) => {
  return (
    <form className={styles.addNewTask} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Текст задачи"
        onChange={inputValue}
      />
      <div className={styles.wrapperBtn}>
        <Button name="Добавить задачу" className={styles.addBtn} onClickButton={addNewItem} />
        <Button type="button" name="Отмена" bg="primary" onClickButton={onCloseModal} />
      </div>
    </form>
  );
};

export default ContentAddItem;
