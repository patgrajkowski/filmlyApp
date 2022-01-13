import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import styles from './Logo.module.css';
const Logo = () => {
  return (
    <NavLink to='/' className={`${styles.logo} ${styles.logo__link}`}>
      <img src={logo} alt='logo' className={styles.logo__img} />
      <h1 className={styles.logo__h1}>Filmly</h1>
    </NavLink>
  );
};
export default Logo;
