import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';
import { motion } from 'framer-motion';
import AuthContext from '../../store/auth-context';

const NavLinks = ({ isMobile, closeMenu }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <ul className={styles.nav__list}>
      {isMobile && (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          className={styles.nav__item}
          onClick={closeMenu}
        >
          <NavLink
            to='/filmy'
            className={styles.nav__link}
            activeClassName={styles['nav__link--active']}
          >
            Strona główna
          </NavLink>
        </motion.li>
      )}

      {isLoggedIn ? (
        authCtx.isAdmin ? (
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
            className={styles.nav__item}
            onClick={closeMenu}
          >
            <NavLink
              to='/admin'
              className={styles.nav__link}
              activeClassName={styles['nav__link--active']}
            >
              Panel Administratora
            </NavLink>
          </motion.li>
        ) : (
          ''
        )
      ) : (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.15 }}
          className={styles.nav__item}
          onClick={closeMenu}
        >
          <NavLink
            to='/rejestracja'
            className={styles.nav__link}
            activeClassName={styles['nav__link--active']}
          >
            Zarejestruj sie
          </NavLink>
        </motion.li>
      )}
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        className={styles.nav__item}
        onClick={closeMenu}
      >
        <NavLink
          to='/logowanie'
          className={styles.nav__link}
          activeClassName={styles['nav__link--active']}
          onClick={isLoggedIn && authCtx.logout}
        >
          {isLoggedIn ? 'Wyloguj się' : 'Zaloguj się'}
        </NavLink>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
