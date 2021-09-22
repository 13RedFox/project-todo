import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import IconSvg from '../../assets/icons';
import ContentAddItem from './ContentAddItem';
import ContentItem from './ContentItem';

import styles from './Content.module.scss';

interface ContentProps {
  className?: string;
}

const Content: FC<ContentProps> = () => {
  const [showModal, setShowModal] = useState(false);

  const state = useSelector(
    (state: any) => state.folders.filter((item: any) => item.isActive === true)[0],
  );

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
      {state ? (
        <>
          <h1 className={styles.title} style={{ color: state.color }}>
            {state.name} <IconSvg id="edit" />
          </h1>

          <ul className={styles.todoList}>
            {(state.todos || []).map((item: { todos: any; id: React.Key | null | undefined }) => (
              <ContentItem item={item} key={item.id} />
            ))}
          </ul>

          <div className={styles.wrapperAddNewItem}>
            <button className={styles.addTodoItem} onClick={isShowModal}>
              <IconSvg id="plus" />
              <span>Новая задача</span>
            </button>
            {showModal && <ContentAddItem onCloseModal={inCloseModal} />}
          </div>
        </>
      ) : (
        <span className={styles.empty}>Задачи отсутствуют</span>
      )}
    </div>
  );
};

export default Content;
