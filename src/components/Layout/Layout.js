import React from 'react';
import MainNav from '../MainNav/MainNav';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <MainNav />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
