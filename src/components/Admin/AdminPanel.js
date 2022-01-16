import React from 'react';
import styles from './AdminPanel.module.css';
import MoviesTable from './MoviesTable';
import { Link, Route } from 'react-router-dom';
import Button from '../UI/Button/Button';
import MovieEditForm from './MovieEditForm';
import MovieAddForm from './MovieAddForm';
const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Link to='/admin/movies'>
          <Button fullwidth={true}>Filmy</Button>
        </Link>
      </div>
      <Route path='/admin/movies' exact>
        <MoviesTable />
      </Route>
      <Route path='/admin/movies/:movieId' exact>
        <MovieEditForm />
      </Route>
      <Route path='/admin/movie/add' exact>
        <MovieAddForm />
      </Route>
    </div>
  );
};

export default AdminPanel;
