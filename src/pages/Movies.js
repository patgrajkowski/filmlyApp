import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Movie from '../components/Movie/Movie';
import styles from './Movies.module.css';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { filterMovies } from '../helpers/filterMovies';
import { fetchMovies } from '../helpers/fetchData';
import { useHistory } from 'react-router-dom';
import { sortArray } from '../helpers/sortArray';

const Movies = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const sortParam = queryParams.get('sort');
  const [sort, setSort] = useState(sortParam);
  const [isLoading, setIsLoading] = useState(false);
  const searchedText = useSelector((state) => state.search.searchedText);
  const filteredMovies = filterMovies(movies, searchedText);
  const sortedMovies = sortArray(filteredMovies, sort);
  const wrapper = useRef();
  const history = useHistory();
  const handleSelect = (event) => {
    setSort(event.target.value);
    history.push(`?search=${searchedText}&sort=${event.target.value}`);
  };

  const populateMovieList = async () => {
    setIsLoading(true);
    const moviesInfo = await fetchMovies('/api/movies/');
    setMovies(moviesInfo);
    setIsLoading(false);
  };
  useEffect(() => {
    populateMovieList();
  }, []);
  return (
    <React.Fragment>
      {isLoading ? (
        <div className={styles.spinner__wrapper}>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          Posortuj filmy:
          <select onChange={handleSelect} value={sort}>
            <option value='title'>Tytuł</option>
            <option value='rate'>Ocena</option>
            <option value='genre'>Gatunek</option>
            <option value='length'>Czas trwania</option>
          </select>
          <div className={styles.movies} ref={wrapper}>
            {sortedMovies.map(
              ({ _id, img, title, genre, director, length }) => (
                <Movie
                  _id={_id}
                  key={_id}
                  img={img}
                  title={title}
                  genre={genre}
                  director={director}
                  length={length}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />
              )
            )}
          </div>
        </>
      )}
      {children}
    </React.Fragment>
  );
};

export default Movies;
