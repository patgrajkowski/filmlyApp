import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './AdminPanel.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import axios from 'axios';

const MovieAddForm = () => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        title: '',
        genre: '',
        director: '',
        length: '',
        rate: '',
        plot: '',
        actors: '',
        img: '',
        stock: '',
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .min(5, 'Wymagane conajmniej 5 znaków')
          .max(255, 'Maksymalnie 255 znaków')
          .required('Pole jest wymagane'),
        genre: Yup.string().required('Pole jest wymagane'),
        director: Yup.string()
          .min(5, 'Wymagane conajmniej 5 znaków')
          .max(255, 'Maksymalnie 255 znaków')
          .required('Pole jest wymagane'),
        length: Yup.number('Czas trwania musi być liczbą')
          .min(1, 'Film musi trwać conajmniej minutę')
          .required('Pole jest wymagane'),
        rate: Yup.number('Ocena musi być liczbą')
          .min(1, 'Ocena nie może być mniejsza niż 1')
          .max(10, 'Ocena nie może być większa niż 10'),
        plot: Yup.string().required('Pole jest wymagane'),
        actorFirstName: Yup.string().required('Pole jest wymagane'),
        actorLastName: Yup.string().required('Pole jest wymagane'),
        actorImg: Yup.string().required('Pole jest wymagane'),
        img: Yup.string().required('Pole jest wymagane'),
        stock: Yup.number().min(0),
      }),
      onSubmit: async ({
        title,
        genre,
        director,
        length,
        rate,
        plot,
        actorFirstName,
        actorLastName,
        actorImg,
        img,
        stock,
      }) => {
        const movie = {
          title,
          genre,
          director,
          length,
          rate,
          plot,
          actors: [
            {
              firstName: actorFirstName,
              lastName: actorLastName,
              img: actorImg,
            },
          ],
          img,
          stock,
        };
        console.log(JSON.stringify(movie));
        const res = await axios.post(
          'http://localhost:3001/api/movies/',
          JSON.stringify(movie),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        console.log(res.data.data);
        console.log(res.data.headers['Content-Type']); // 'application/json',
        console.log(movie);
      },
    });
  return (
    <Card className={styles.form__wrapper}>
      <h2 className={styles.form__title}>Dodaj film</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          id='title'
          name='title'
          className={styles.form__input}
          placeholder='Tytuł'
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.title && errors.title ? errors.title : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='genre'
          name='genre'
          className={styles.form__input}
          placeholder='Gatunek'
          value={values.genre}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.genre && errors.genre ? errors.genre : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='director'
          name='director'
          className={styles.form__input}
          placeholder='Reżyser'
          value={values.director}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.director && errors.director ? errors.director : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='length'
          name='length'
          className={styles.form__input}
          placeholder='Czas trwania'
          value={values.length}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.length && errors.length ? errors.length : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='rate'
          name='rate'
          className={styles.form__input}
          placeholder='Ocena'
          value={values.rate}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.rate && errors.rate ? errors.rate : ' '}
        </div>
        <textarea
          onBlur={handleBlur}
          onChange={handleChange}
          id='plot'
          name='plot'
          className={styles.form__textarea}
          placeholder='Krótki opis'
          value={values.plot}
        ></textarea>
        <div className={styles.form__errorMessage}>
          {touched.plot && errors.plot ? errors.plot : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorFirstName'
          name='actorFirstName'
          className={styles.form__input}
          placeholder='Imię aktora'
          value={values.actorFirstName}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorFirstName && errors.actorFirstName
            ? errors.actorFirstName
            : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorLastName'
          name='actorLastName'
          className={styles.form__input}
          placeholder='Nazwisko aktora'
          value={values.actorLastName}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorLastName && errors.actorLastName
            ? errors.actorLastName
            : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorImg'
          name='actorImg'
          className={styles.form__input}
          placeholder='Adres grafiki aktora'
          value={values.actorImg}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorImg && errors.actorImg ? errors.actorImg : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='img'
          name='img'
          className={styles.form__input}
          placeholder='Adres grafiki'
          value={values.img}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.img && errors.img ? errors.img : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='stock'
          name='stock'
          className={styles.form__input}
          placeholder='Ilość'
          value={values.stock}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.stock && errors.stock ? errors.stock : ' '}
        </div>
        <Button
          type='submit'
          fullwidth={true}
          className={styles.form__button}
          secondary={true}
          disabled={
            errors.title ||
            errors.genre ||
            errors.director ||
            errors.length ||
            errors.rate ||
            errors.plot ||
            errors.actors ||
            errors.img ||
            errors.stock ||
            !touched.title
          }
        >
          Dodaj film
        </Button>
      </form>
    </Card>
  );
};

export default MovieAddForm;
