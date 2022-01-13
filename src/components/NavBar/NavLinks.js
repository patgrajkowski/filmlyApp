import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';
import { motion } from 'framer-motion';

const NavLinks = ({ isMobile, closeMenu }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className={styles.nav__list}>
      {isMobile && (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.05}}
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
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.1}}
        className={styles.nav__item}
        onClick={closeMenu}
      >
        <NavLink
          to='/moje-wypozyczenia'
          className={styles.nav__link}
          activeClassName={styles['nav__link--active']}
        >
          Moje komentarze
        </NavLink>
      </motion.li>
      <>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.15}}
          className={styles.nav__item}
          onClick={closeMenu}
        >
          <NavLink
            to='/rejestracja'
            className={styles.nav__link}
            activeClassName={styles['nav__link--active']}
          >
            Zarejestruj się
          </NavLink>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.2}}
          className={styles.nav__item}
          onClick={closeMenu}
        >
          <NavLink
            to='/logowanie'
            className={styles.nav__link}
            activeClassName={styles['nav__link--active']}
          >
            Zaloguj się
          </NavLink>
        </motion.li>
      </>
    </ul>
  );
};

export default NavLinks;
