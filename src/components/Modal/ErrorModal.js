import React from 'react';
import Button from '../UI/Button/Button';
import Modal from './Modal';
import styles from './ErrorModal.module.css';
const ErrorModal = ({ onClick, title, message, buttonOnClick, buttonText }) => {
  return (
    <React.Fragment>
      <Modal className={styles.modal} onClick={onClick}>
        <div className={styles.modal__header}>{title || 'Oooops!'}</div>
        <div className={styles['modal__error-message']}>{message}</div>
        <Button
          className={styles.modal__button}
          onClick={buttonOnClick || onClick}
        >
          {buttonText || 'OK'}
        </Button>
      </Modal>
    </React.Fragment>
  );
};

export default ErrorModal;
