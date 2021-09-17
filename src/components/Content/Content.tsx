import React, { FC, useState } from 'react';
import IconSvg from '../../assets/icons';
import { Todo } from '../App/App';

import styles from './Content.module.scss';
import ContentAddItem from './ContentAddItem';
import ContentItem from './ContentItem';

interface ContentProps {
  className?: string;
  title: string;
  todos: Todo[];
}

const Content: FC<ContentProps> = ({ title, todos }) => {
  const [showModal, setShowModal] = useState(false);

  const onItemClick = (item: Todo) => {
    item.isDone = !item.isDone;
    console.log(item);
  };

  const isShowModal = () => {
    setShowModal((prevState) => !prevState);
    console.log('Click');
  };

  const inCloseModal = () => {
    setShowModal(false);
    console.log('Close Modal');
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        {title} <IconSvg id="edit" />
      </h1>

      <ul className={styles.todoList}>
        {(todos || []).map((item) => (
          <ContentItem onTodoClick={() => onItemClick(item)} item={item} key={item.id} />
        ))}
      </ul>

      <div className={styles.wrapperAddNewItem}>
        <button className={styles.addTodoItem} onClick={isShowModal}>
          <IconSvg id="plus" />
          <span>Новая задача</span>
        </button>
        {showModal && <ContentAddItem onCloseModal={inCloseModal} />}
      </div>

      {/* <span className={styles.empty}>Задачи отсутствуют</span> */}
    </div>
  );
};

export default Content;
