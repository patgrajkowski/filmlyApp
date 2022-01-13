import React from 'react';
import styles from './NavBar.module.css';
import { useSelector } from 'react-redux';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useMediaQuery } from 'react-responsive';

const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  return (
    <header className={styles.header}>
      {isMobile ? (
        <MobileNav class={styles.nav__mobile} />
      ) : (
        <DesktopNav class={styles.nav__desktop} />
      )}
    </header>
  );
};

export default NavBar;
