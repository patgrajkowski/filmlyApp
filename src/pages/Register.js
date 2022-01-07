import React from 'react';
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <RegisterForm />
    </div>
  );
};

export default Register;
