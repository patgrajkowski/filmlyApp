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
  value,
}) => (
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    className={`${styles.input} ${className}`}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  ></input>
);

export default Input;
