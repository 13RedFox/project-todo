import classNames from 'classnames';
import React, { FC } from 'react';
import IconSvg from '../../assets/icons';
import { Todo } from '../App/App';

import styles from './Content.module.scss';

interface ContentItemProps {
  item: Todo;
  onTodoClick?: () => void;
}

const ContentItem: FC<ContentItemProps> = ({ item, onTodoClick }) => {
  const { isDone, name } = item;

  return (
    <li className={styles.todoItem} onClick={onTodoClick}>
      <div className={classNames(styles.marker, isDone && styles.done)}>
        {<IconSvg id="done" />}
      </div>
      <span className={styles.text}>{name}</span>
    </li>
  );
};

export default ContentItem;
