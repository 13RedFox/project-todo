import classNames from 'classnames';
import React, { FC } from 'react';
import IconSvg from '../../assets/icons';

import styles from './Content.module.scss';

interface ContentItemProps {
  item?: any;
  onTodoClick?: () => void;
}

const ContentItem: FC<ContentItemProps> = ({ item }) => {
  return (
    <li className={styles.todoItem}>
      <div className={classNames(styles.marker)}>{<IconSvg id="done" />}</div>
      <span className={styles.text}>{item.name}</span>
    </li>
  );
};

export default ContentItem;
