import React, { FC } from 'react';
import Button from '../Button';

import styles from './Content.module.scss';

interface ContentAddItemProps {
  onClickButton?: () => void;
  onCloseModal?: () => void;
}

const ContentAddItem: FC<ContentAddItemProps> = ({ onCloseModal }) => {
  // const [state, setState] = useState('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // const newObj = {
    //   name: state,
    // };

    // despatch({ type: 'ADD_FOLDER', payload: newObj });
    // despatch(addFoldeerAction(newObj));
  };

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    let value = e.target.value;
    return value;
  };

  const addNewItem = () => {
    console.log(inputValue);
  };

  return (
    <form className={styles.addNewTask} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Текст задачи"
        name="name"
        // value={state}
        // onChange={setState}
      />
      <div className={styles.wrapperBtn}>
        <Button name="Добавить задачу" className={styles.addBtn} onClickButton={addNewItem} />
        <Button type="button" name="Отмена" bg="primary" onClickButton={onCloseModal} />
      </div>
    </form>
  );
};

export default ContentAddItem;
