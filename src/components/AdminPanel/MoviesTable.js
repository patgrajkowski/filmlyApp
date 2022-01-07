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
import MovieDeleteForm from './MovieDeleteForm';
const MoviesTable = () => {
  const [movies, setMovies] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const sortParam = queryParams.get('sort');
  const [sort, setSort] = useState(sortParam);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [clickedId, setClickedId] = useState(' ');
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
    setShowAddModal(true);
  };
  const handleClick = (event, id) => {
    setShowEditModal(true);
    setClickedId(id);
    console.log();
  };
  const handleModalClickAdd = () => {
    setShowAddModal(false);
    // setShowDeleteModal(false);
    // setShowEditModal(false);
  };
  const handleModalClickDelete = () => {
    setShowDeleteModal(false);
    // setShowDeleteModal(false);
    // setShowEditModal(false);
  };
  const handleDelete = async () => {
    setShowDeleteModal(true);
    // const res = await axios.post(
    //   `http://localhost:3001/api/rentals/${clickedId}`,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    // console.log(res);
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
        <option value='stock'>Stock</option>
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
            <h3>Stock</h3>
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
                stock,
                img,
              }) => (
                <div
                  className={styles.table__singleValue}
                  key={_id}
                  onClick={(event, _id) => {
                    handleClick(event, _id);
                  }}
                  name={_id}
                >
                  <p name={_id}>{_id}</p>
                  <p name={_id}>{created}</p>
                  <p name={_id}>{title}</p>
                  <p name={_id}>{genre}</p>
                  <p name={_id}>{director}</p>
                  <p name={_id}>
                    {actors.map(
                      ({ firstName, lastName }) => `${firstName} ${lastName} `
                    )}
                  </p>
                  <p name={_id}>{length}</p>
                  <p name={_id}>{rate}</p>
                  <p name={_id}>{plot}</p>
                  <p name={_id}>{stock}</p>
                  <p name={_id}>{img}</p>
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
        <Button secondary={true} onClick={handleDelete}>
          Edytuj
        </Button>
        <Button secondary={true} onClick={handleDelete}>
          Usuń
        </Button>
      </div>

      {showAddModal && (
        <Modal>
          <MovieAddForm />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal>
          <MovieDeleteForm />
        </Modal>
      )}
    </>
  );
};
export default MoviesTable;
