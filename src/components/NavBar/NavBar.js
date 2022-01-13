import React from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import styles from './NavBar.module.css';
import hamburgerIcon from '../../images/hamburger_icon.svg';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import NavLinks from './NavLinks';
const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <header className={styles.header}>
      <img src={hamburgerIcon} alt='hamburger' />
      <Logo></Logo>
      <SearchBar
        className={styles.searchbar}
        placeholder='Wyszukaj wpisując nazwę filmu lub gatunek'
      />
      <nav className={styles.nav}>
        <NavLinks></NavLinks>
      </nav>
    </header>
  );
};

export default NavBar;
