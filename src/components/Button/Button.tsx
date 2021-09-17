import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  name: string;
  bg?: string;
  onClickButton?: () => void;
}

const Button: FC<ButtonProps> = ({ name, bg = 'default', onClickButton }) => {
  return (
    <button type="button" className={classNames(styles.button, styles[bg])} onClick={onClickButton}>
      {name}
    </button>
  );
};

export default Button;
