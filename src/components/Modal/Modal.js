import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card/Card';
import styles from './Modal.module.css';
const Modal = ({ className, children, onClick }) => {
  const wrapper = useRef();
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={onClick} ref={wrapper}>
          <Card className={className}>{children}</Card>
        </div>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
