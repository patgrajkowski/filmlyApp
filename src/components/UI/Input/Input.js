import React from 'react';
import styles from './Input.module.css';

const Input = ({
  type,
  placeholder,
  className,
  onChange,
  onBlur,
  id,
  name,
}) => (
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    className={`${styles.input} ${className}`}
    onChange={onChange}
    onBlur={onBlur}
  ></input>
);

export default Input;
