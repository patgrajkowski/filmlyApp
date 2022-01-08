import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.module.css';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import Button from '../components/UI/Button/Button';
import Card from '../components/UI/Card/Card';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <LoginForm />
        <div>
          <h2>Nie masz jeszcze konta?</h2>
          <NavLink
            to='/rejestracja'
            className={styles.nav__link}
            activeClassName={styles['nav__link--active']}
          >
            <Button fullwidth={true}>Zarejestruj się</Button>
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default Login;
