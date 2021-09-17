import classNames from 'classnames';
import React, { FC, useState } from 'react';
import IconSvg from '../../assets/icons';
import { NewFolders } from '../App/App';

import styles from './Aside.module.scss';
import AsideNewFolder from './components/AsideNewFolder';

interface AsideProps {
  className?: string;
  newFolders: NewFolders[];
}

const Aside: FC<AsideProps> = ({ newFolders }) => {
  const [showNewFolder, setShowNewFolder] = useState(false);

  const addNewFolder = () => {
    setShowNewFolder(true);
    console.log('Add New Folder');
  };

  const closeModal = () => {
    setShowNewFolder(false);
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__top}>
        <IconSvg id="entypo-list" />
        <span className={styles.aside__topText}>Все задачи</span>
      </div>

      <ul className={styles.aside__list}>
        {(newFolders || []).map((item) => (
          <li className={classNames(styles.aside__list_item)} key={item.id}>
            <div className={styles.aside__list_marker} style={{ backgroundColor: item.color }} />
            <span className={styles.aside__list_text}>{item.name}</span>
          </li>
        ))}
      </ul>

      <button className={styles.newFolders} onClick={addNewFolder}>
        <IconSvg id="plus" />
        <span className={styles.newFolders__text}>Добавить папку</span>
      </button>

      {showNewFolder && <AsideNewFolder closeModal={closeModal} />}
    </aside>
  );
};

export default Aside;
