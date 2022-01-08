import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../UI/SearchBar/SearchBar';
import styles from './MainNav.module.css';
import logo from '../../images/logo.svg';
import { useSelector } from 'react-redux';
const MainNav = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <header className={styles.header}>
      <NavLink to='/' className={`${styles.logo} ${styles.nav__link}`}>
        <img src={logo} alt='logo' className={styles.logo__img} />
        <h1 className={styles.logo__h1}>Filmly</h1>
      </NavLink>
      <SearchBar
        className={styles.searchbar}
        placeholder='Wyszukaj wpisując nazwę filmu lub gatunek'
      />
      <nav className={styles.nav}>
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
                  Zarejestruj się xd
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
      </nav>
    </header>
  );
};

export default MainNav;
