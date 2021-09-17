import React, { FC } from 'react';
import IconSvg from '../../../../assets/icons';
import Button from '../../../Button';
import styles from './AsideNewFolder.module.scss';

interface AsideNewFolderProps {
  closeModal?: () => void;
}

interface ColorsRadio {
  color: string;
  id: number;
  isChecked: Boolean;
}

const colorsRadio: ColorsRadio[] = [
  { color: '#c9d1d3', id: 0, isChecked: true },
  { color: '#42b883', id: 1, isChecked: false },
  { color: '#64c4ed', id: 2, isChecked: false },
  { color: '#ffbbcc', id: 3, isChecked: false },
  { color: '#b6e6bd', id: 4, isChecked: false },
  { color: '#c355f5', id: 5, isChecked: false },
  { color: '#09011a', id: 6, isChecked: false },
  { color: '#ff6464', id: 7, isChecked: false },
];

const AsideNewFolder: FC<AsideNewFolderProps> = ({ closeModal }) => {
  const value = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <form className={styles.popup}>
      <button className={styles.close} onClick={closeModal}>
        <IconSvg id="plus" />
      </button>
      <input className={styles.input} type="text" placeholder="Название папки" onChange={value} />
      <div className={styles.wrapperRadio}>
        {(colorsRadio || []).map((color) => (
          <div key={color.id} className={styles.wrapperColor}>
            <input className={styles.inputRadio} type="radio" name="radio" value={color.color} />
            <label
              className={styles.labelRadio}
              style={{ backgroundColor: color.color }}
              htmlFor="radio"
            />
          </div>
        ))}
      </div>
      <Button name="Добавить" />
    </form>
  );
};

export default AsideNewFolder;
