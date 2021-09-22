import React, { FC, useState } from 'react';
import IconSvg from '../../../../assets/icons';
import Button from '../../../Button';
import styles from './AsideNewFolder.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { addFolderAction } from '../../../../store/actions/actions';

interface AsideNewFolderProps {
  closeModal?: () => void;
}

interface ColorsRadio {
  color: string;
  id: string;
  isChecked: Boolean;
}

const colorsRadio: ColorsRadio[] = [
  { color: '#c9d1d3', id: '0', isChecked: false },
  { color: '#42b883', id: '1', isChecked: false },
  { color: '#64c4ed', id: '2', isChecked: false },
  { color: '#ffbbcc', id: '3', isChecked: true },
  { color: '#b6e6bd', id: '4', isChecked: false },
  { color: '#c355f5', id: '5', isChecked: false },
  { color: '#09011a', id: '6', isChecked: false },
  { color: '#ff6464', id: '7', isChecked: false },
];

const AsideNewFolder: FC<AsideNewFolderProps> = ({ closeModal }) => {
  const [isSelected, setIsSelected] = useState('#c9d1d3');
  const [folderName, setFolderName] = useState<string>('');

  const store = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFolder = {
      name: folderName,
      id: store.folders.length + 1,
      isActive: false,
      color: isSelected,
      todos: [
        // { name: 'Изучить JavaScript1', id: 1, isDone: false },
        // { name: 'Изучить JavaScript2', id: 2, isDone: false },
      ],
    };
    dispatch(addFolderAction(newFolder));
  };

  return (
    <form className={styles.popup} onSubmit={handleSubmit}>
      <button className={styles.close} onClick={closeModal}>
        <IconSvg id="plus" />
      </button>

      <input
        className={styles.input}
        type="text"
        placeholder="Название папки"
        value={folderName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFolderName(e.target.value)}
      />

      <div className={styles.wrapperRadio}>
        {(colorsRadio || []).map((color) => (
          <div key={color.id} className={styles.wrapperColor}>
            <input
              className={styles.inputRadio}
              type="radio"
              name="radio"
              id={color.id}
              checked={isSelected === color.color}
              value={color.color}
              onChange={(e) => setIsSelected((prevState) => e.target.value)}
            />
            <label
              className={styles.labelRadio}
              style={{ backgroundColor: color.color }}
              htmlFor={color.id}
            />
          </div>
        ))}
      </div>

      <Button name="Добавить" />
    </form>
  );
};

export default AsideNewFolder;
