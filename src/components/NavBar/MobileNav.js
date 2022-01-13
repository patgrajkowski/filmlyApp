import React from 'react';
import { GiHamburgerMenu as HamburgerMenu } from 'react-icons/gi';
import { CgClose as CloseButton } from 'react-icons/cg';
import { useState } from 'react';
import SearchBar from '../UI/SearchBar/SearchBar';
import NavLinks from './NavLinks';
import styles from './MobileNav.module.css';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <React.Fragment>
      {menuOpen ? (
        <CloseButton
          color='#2e8bc0'
          size='40px'
          className={styles.nav__icon}
          onClick={closeMenu}
        />
      ) : (
        <HamburgerMenu
          color='#2e8bc0'
          size='40px'
          className={styles.nav__icon}
          onClick={openMenu}
        />
      )}

      <SearchBar className={styles.searchbar} placeholder='Szukaj filmu' />
      {menuOpen && (
        <nav>
          {console.log('xd')}
          <NavLinks isMobile='true' closeMenu={closeMenu} />
        </nav>
      )}
    </React.Fragment>
  );
};

export default MobileNav;
