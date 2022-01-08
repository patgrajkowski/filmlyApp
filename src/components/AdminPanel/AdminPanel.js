import React from 'react';
import styles from './AdminPanel.module.css';
import MoviesTable from './MoviesTable';
import { Link, Route } from 'react-router-dom';
import RentalsTable from './RentalsTable';
import CustomersTable from './CustomersTable';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Link to='/admin/movies'>
          <Button fullwidth={true}>Filmy</Button>
        </Link>
        <Link to='/admin/rentals'>
          <Button fullwidth={true}>Wypożyczenia</Button>
        </Link>
        <Link to='/admin/customers'>
          <Button fullwidth={true}>Klienci</Button>
        </Link>
      </div>
      <Route path='/admin/movies' exact>
        <MoviesTable />
      </Route>
      <Route path='/admin/rentals' exact>
        <RentalsTable />
      </Route>
      <Route path='/admin/customers' exact>
        <CustomersTable />
      </Route>
    </div>
  );
};

export default AdminPanel;
