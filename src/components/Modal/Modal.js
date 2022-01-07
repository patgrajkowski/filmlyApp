import gsap from 'gsap/all';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card/Card';
import styles from './Modal.module.css';
const Modal = ({ className, children, onClick }) => {
  const wrapper = useRef();
  useEffect(() => {
    gsap.fromTo(
      wrapper.current.children,
      { y: 100, autoAlpha: 0 },
      { duration: 1, ease: 'power3.inOut', y: '-=100', autoAlpha: 1 }
    );
  });
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
