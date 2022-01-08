import React from 'react';
import styles from './Button.module.css';

const Button = ({
  type,
  onClick,
  className,
  fullwidth,
  children,
  secondary,
  disabled,
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`${styles.button} ${styles['button--primary']} ${className} ${
        fullwidth && styles['button--fullwidth']
      } ${secondary && styles['button--secondary']} ${
        disabled && styles['button--disabled']
      }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
