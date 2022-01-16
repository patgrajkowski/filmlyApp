import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchMovies } from '../../helpers/fetchData';
import { sortArray } from '../../helpers/sortArray';
import Modal from '../Modal/Modal';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import styles from './AdminPanel.module.css';
import MovieAddForm from './MovieAddForm';
const MoviesTable = () => {
  const [movies, setMovies] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const sortParam = queryParams.get('sort');
  const [sort, setSort] = useState(sortParam);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const history = useHistory();
  const populateMovieList = async () => {
    const moviesInfo = await fetchMovies('/api/movies/');
    setMovies(moviesInfo);
  };
  const handleSelect = (event) => {
    setSort(event.target.value);
    history.push(`?sort=${event.target.value}`);
  };
  useEffect(() => {
    populateMovieList();
  }, []);
  const handleAdd = () => {
    history.push('/admin/movie/add');
  };
  const handleClick = (event) => {
    history.push(`/admin/movies/${event.target.dataset.id}`);
  };
  const sortedMovies = sortArray(movies, sort);
  return (
    <>
      <select onChange={handleSelect} value={sort}>
        <option value='_id'>ID</option>
        <option value='created'>Created</option>
        <option value='title'>Title</option>
        <option value='genre'>Genre</option>
        <option value='director'>Director</option>
        <option value='actors'>Actors</option>
        <option value='length'>Length</option>
        <option value='rate'>Rate</option>
        <option value='plot'>Plot</option>
        <option value='img'>Img</option>
      </select>
      <Card className={styles.card}>
        <h2>Movies</h2>
        <Card className={styles.table}>
          <div className={styles.table__properties}>
            <h3>ID</h3>
            <h3>Created</h3>
            <h3>Title</h3>
            <h3>Genre</h3>
            <h3>Director</h3>
            <h3>Actors</h3>
            <h3>Length</h3>
            <h3>Rate</h3>
            <h3>Plot</h3>
            <h3>Img</h3>
          </div>
          <div className={styles.table__values}>
            {sortedMovies.map(
              ({
                _id,
                created,
                title,
                genre,
                director,
                actors,
                length,
                rate,
                plot,
                img,
              }) => (
                <div
                  className={styles.table__singleValue}
                  key={_id}
                  onClick={handleClick}
                  name={_id}
                >
                  <p data-id={_id}>{_id}</p>
                  <p data-id={_id}>{created}</p>
                  <p data-id={_id}>{title}</p>
                  <p data-id={_id}>{genre}</p>
                  <p data-id={_id}>{director}</p>
                  <p data-id={_id}>
                    {actors.map(
                      ({ firstName, lastName }) => `${firstName} ${lastName} `
                    )}
                  </p>
                  <p data-id={_id}>{length}</p>
                  <p data-id={_id}>{rate}</p>
                  <p data-id={_id}>{plot}</p>
                  <p data-id={_id}>{img}</p>
                </div>
              )
            )}
          </div>
        </Card>
      </Card>
      <div>
        <Button secondary={true} onClick={handleAdd}>
          Dodaj
        </Button>
      </div>
    </>
  );
};
export default MoviesTable;
