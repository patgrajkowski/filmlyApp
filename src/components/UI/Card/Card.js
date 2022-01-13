import React from 'react';
import styles from './Card.module.css';
import { motion } from 'framer-motion';

const Card = ({
  className,
  children,
  onClick,
  initial,
  transition,
  animate,
}) => {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      onClick={onClick}
      initial={initial}
      transition={transition}
      animate={animate}
    >
      {children}
    </motion.div>
  );
};

export default Card;
