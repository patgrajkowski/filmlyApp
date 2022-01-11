import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchMovie } from '../../helpers/fetchData';
import Comments from '../Comments/Comments';
import ErrorModal from '../Modal/ErrorModal';
import Card from '../UI/Card/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './MovieDetailedInfo.module.css';
const MovieDetailedInfo = () => {
  const params = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [actors, setActors] = useState([{}]);
  const [error, setError] = useState(false);
  const getMovieInfo = async () => {
    setIsLoading(true);
    const movieInfo = await fetchMovie(`/api/movies/${params.movieId}`);
    setMovie(movieInfo);
    setActors(movieInfo.actors);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovieInfo();
  }, []);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const handleClick = () => {};
  const handleClickError = () => {
    setError(true);
  };
  const handleErrorOnClick = () => {
    setError(false);
  };
  const handleLogin = () => {
    history.push('/logowanie');
  };
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className={styles.spinner__wrapper}>
            <LoadingSpinner />
          </div>
        ) : (
          <Card className={styles.card}>
            {movie === 404 ? (
              <h1>Film o wybranym ID nie isnieje!</h1>
            ) : (
              <>
                {' '}
                <div className={styles.movie}>
                  <div>
                    <img
                      src={movie.img}
                      alt={movie.title}
                      className={styles.movie__img}
                    />
                  </div>
                  <div className={styles.movie__info}>
                    <h2 className={styles.movie__title}>{movie.title}</h2>
                    <p>{movie.plot}</p>
                    <div className={styles.movie__details}>
                      <h3 className={styles.movie__property}>reżyser</h3>
                      <h3 className={styles.movie__value}>{movie.director}</h3>
                      <h3 className={styles.movie__property}>gatunek</h3>
                      <h3 className={styles.movie__value}>{movie.genre}</h3>
                      <h3 className={styles.movie__property}>czas trwania</h3>
                      <h3 className={styles.movie__value}>
                        {movie.length} minut
                      </h3>
                      <h3 className={styles.movie__property}>ocena</h3>
                      <h3 className={styles.movie__value}>{movie.rate}</h3>
                      <h3 className={styles.movie__property}>dostępność</h3>
                      <h3 className={styles.movie__value}>
                        {movie.stock} szt.
                      </h3>
                    </div>
                  </div>
                </div>
                <h2>Obsada filmu {movie.title}</h2>
                <div className={styles.actors}>
                  {actors.map(({ _id, firstName, lastName, role, img }) => (
                    <div className={styles.actor} key={_id}>
                      <img
                        src={img}
                        alt={`${firstName}${lastName}`}
                        className={styles.actor__img}
                      ></img>
                      <p className={styles.actor__name}>
                        {firstName} {lastName}
                      </p>
                      <p className={styles.actor__role}>{role}</p>
                    </div>
                  ))}
                </div>
                <h2>Komentarze</h2>
                <Comments />
              </>
            )}
          </Card>
        )}
      </div>
      {error ? (
        <ErrorModal
          message='Aby wypożyczyć film musisz być zalogowany.'
          onClick={handleErrorOnClick}
          buttonOnClick={handleLogin}
          buttonText='Zaloguj'
        />
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default MovieDetailedInfo;
