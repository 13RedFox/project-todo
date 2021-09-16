import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  name: string;
  bg?: string;
}

const Button: FC<ButtonProps> = ({ name, bg = 'default' }) => {
  return (
    <button type="button" className={classNames(styles.button, styles[bg])}>
      {name}
    </button>
  );
};

export default Button;
