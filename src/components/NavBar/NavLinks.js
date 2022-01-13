import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';

const NavLinks = ({ isAuth }) => {
  return (
    <ul className={styles.nav__list}>
      {isAuth ? (
        <li className={styles.nav__item}>
          <NavLink
            to='/moje-wypozyczenia'
            className={styles.nav__link}
            activeClassName={styles['nav__link--active']}
          >
            Moje wypożyczenia
          </NavLink>{' '}
        </li>
      ) : (
        <>
          <li className={styles.nav__item}>
            <NavLink
              to='/rejestracja'
              className={styles.nav__link}
              activeClassName={styles['nav__link--active']}
            >
              Zarejestruj się
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              to='/logowanie'
              className={styles.nav__link}
              activeClassName={styles['nav__link--active']}
            >
              Zaloguj się
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
