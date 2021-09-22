import classNames from 'classnames';
import React, { FC, useState } from 'react';
import IconSvg from '../../assets/icons';

import styles from './Aside.module.scss';
import AsideNewFolder from './components/AsideNewFolder';
import { useSelector, useDispatch } from 'react-redux';
import { setFolderAction } from '../../store/actions/actions';

interface AsideProps {
  className?: string;
}

const Aside: FC<AsideProps> = () => {
  const store = useSelector((state: any) => state);
  const folders = store.folders;
  const dispatch = useDispatch();

  const [showNewFolder, setShowNewFolder] = useState(false);

  const addNewFolder = () => {
    setShowNewFolder(true);
    console.log('Add New Folder');
  };

  const closeModal = () => {
    setShowNewFolder(false);
  };

  const checkedFolders = (isActive: Boolean, idx: number) => {
    const newArr = [...folders];
    newArr.forEach((item, index) =>
      index === idx ? (item.isActive = true) : (item.isActive = false),
    );
    dispatch(setFolderAction(newArr));
  };

  return (
    <aside className={styles.aside}>
      {store.folders.length > 0 && (
        <div className={styles.aside__top}>
          <IconSvg id="entypo-list" />
          <span className={styles.aside__topText}>Все задачи</span>
        </div>
      )}

      <ul className={styles.aside__list}>
        {(folders || []).map((item: any, idx: any) => (
          <li
            className={classNames(styles.aside__list_item, item.isActive && styles.active)}
            key={item.id}
            onClick={() => checkedFolders(item.isActive, idx)}>
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
