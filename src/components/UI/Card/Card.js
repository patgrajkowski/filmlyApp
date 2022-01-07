import React from 'react';
import styles from './Card.module.css';
const Card = ({ className, children, onClick }) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
