import classNames from 'classnames';
import React from 'react';
import IconSvg from '../../assets/icons';
import AddFolders from '../AddFolders';

import styles from './Aside.module.scss';

interface Props {}

interface NewFolders {
  name: string;
  id: number;
}

const newFolders: NewFolders[] = [
  { name: 'Покупки', id: 1 },
  { name: 'Фронтенд', id: 2 },
  { name: 'Фильмы и сер...', id: 3 },
  { name: 'Книги', id: 4 },
  { name: 'Личное', id: 5 },
];

const Aside = (props: Props) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__top}>
        <IconSvg id="entypo-list" />
        <span className={styles.aside__topText}>Все задачи</span>
      </div>

      <ul className={styles.aside__list}>
        {(newFolders || []).map((item, idx) => (
          <li className={classNames(styles.aside__list_item, styles.active)} key={item.id}>
            <div className={styles.aside__list_marker} />
            <span className={styles.aside__list_text}>{item.name}</span>
          </li>
        ))}
      </ul>

      <div className={styles.newFolders}>
        <IconSvg id="plus" />
        <span className={styles.newFolders__text}>Добавить папку</span>
      </div>

      <AddFolders />
    </aside>
  );
};

export default Aside;
