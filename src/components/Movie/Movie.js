import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../UI/Card/Card';
import styles from './Movie.module.css';
const Movie = ({
  isUnavalible,
  img,
  title,
  genre,
  director,
  length,
  _id,
  onClick,
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/filmy/${_id}`);
  };
  return (
    <Card
      className={`${styles.movie} ${
        isUnavalible && styles['movie--unavalible']
      }`}
      onClick={onClick ? onClick : handleClick}
    >
      <img src={img} alt='img' className={styles.movie__img} />
      <div className={styles.movie__info}>
        <h2 className={styles.movie__title}>{title}</h2>
        <div className={styles.movie__details}>
          <h3 className={styles.movie__property}>reżyser</h3>
          <h3 className={styles.movie__value}>{director}</h3>
          <h3 className={styles.movie__property}>gatunek</h3>
          <h3 className={styles.movie__value}>{genre}</h3>
          <h3 className={styles.movie__property}>czas trwania</h3>
          <h3 className={styles.movie__value}>{length}</h3>
        </div>
      </div>
    </Card>
  );
};

export default Movie;
