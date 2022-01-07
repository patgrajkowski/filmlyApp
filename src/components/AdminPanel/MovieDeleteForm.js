import React, { useState } from 'react';
import styles from './AdminPanel.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import axios from 'axios';

const MovieAddForm = ({ movies }) => {
  const [idState, setIdState] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(idState);
    const rentals = await axios.get(
      `http://localhost:3001/api/rentals/movie/${idState}`
    );
    if (!rentals) axios.delete(`http://localhost:3001/api/movies/${idState}`);
    else {
      alert('Nie można usunąć ponieważ istnieją aktywne wypożyczenia');
    }
  };
  const handleChange = (event) => {
    setIdState(event.target.value);
  };
  return (
    <Card className={styles.deleteForm__wrapper}>
      <h2 className={styles.form__title}>Usuń film</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          className={styles.form__input}
          placeholder='Id filmu'
          value={idState}
          onChange={handleChange}
        />
        <Button
          type='submit'
          fullwidth={true}
          className={styles.deleteForm__button}
          secondary={true}
        >
          Usuń film
        </Button>
      </form>
    </Card>
  );
};

export default MovieAddForm;
