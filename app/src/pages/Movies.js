import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import Movie from '../components/Movie/Movie';
import styles from './Movies.module.css';
import ErrorModal from '../components/Modal/ErrorModal';
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
  const [unavalibleClicked, setUnavalibleClicked] = useState(false);
  const searchedText = useSelector((state) => state.search.searchedText);
  const wrapper = useRef();
  const history = useHistory();
  const handleUnavalibleOnClick = () => {
    setUnavalibleClicked(true);
  };
  const handleErrorOnClick = () => {
    setUnavalibleClicked(false);
  };
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
    gsap.fromTo(
      wrapper.current,
      { y: 100, autoAlpha: 0 },
      { duration: 2, ease: 'power3.inOut', y: '-=100', autoAlpha: 1 }
    );
  }, []);
  const filteredMovies = filterMovies(movies, searchedText);
  const sortedMovies = sortArray(filteredMovies, sort);
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
              ({ _id, img, title, genre, director, length, stock }) => (
                <Movie
                  _id={_id}
                  key={_id}
                  img={img}
                  title={title}
                  genre={genre}
                  director={director}
                  length={length}
                  isUnavalible={stock === 0}
                  onClick={stock === 0 ? handleUnavalibleOnClick : null}
                />
              )
            )}
          </div>
        </>
      )}
      {unavalibleClicked && (
        <ErrorModal
          message='Wygląda na to, że wybrany film jest w tej chwili niedostępny. Spróbuj ponownie później.'
          onClick={handleErrorOnClick}
        />
      )}
      {children}
    </React.Fragment>
  );
};

export default Movies;
