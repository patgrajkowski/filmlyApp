import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import Logo from './Logo';
import NavLinks from './NavLinks';
import styles from './DesktopNav.module.css';

const DesktopNav = () => {
  return (
    <React.Fragment>
      <Logo className={styles.logo} />
      <SearchBar
        className={styles.searchbar}
        placeholder='Wyszukaj wpisując nazwę filmu lub gatunek'
      />
      <nav className={styles.nav}>
        <NavLinks />
      </nav>
    </React.Fragment>
  );
};

export default DesktopNav;
