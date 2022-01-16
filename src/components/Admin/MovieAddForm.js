import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './AdminPanel.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const MovieAddForm = () => {
  const history = useHistory();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        title: '',
        genre: '',
        director: '',
        length: '',
        rate: '',
        plot: '',
        actors: '',
        img: '',
        actorFirstName: '',
        actorLastName: '',
        actorImg: '',
        actorFirstName1: '',
        actorLastName1: '',
        actorImg1: '',
        actorFirstName2: '',
        actorLastName2: '',
        actorImg2: '',
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
        img: Yup.string().required('Pole jest wymagane'),
        actorFirstName: Yup.string().required('Pole jest wymagane'),
        actorLastName: Yup.string().required('Pole jest wymagane'),
        actorImg: Yup.string().required('Pole jest wymagane'),
        actorRole: Yup.string().required('Pole jest wymagane'),
        actorFirstName1: Yup.string().required('Pole jest wymagane'),
        actorLastName1: Yup.string().required('Pole jest wymagane'),
        actorImg1: Yup.string().required('Pole jest wymagane'),
        actorRole1: Yup.string().required('Pole jest wymagane'),
        actorFirstName2: Yup.string().required('Pole jest wymagane'),
        actorLastName2: Yup.string().required('Pole jest wymagane'),
        actorImg2: Yup.string().required('Pole jest wymagane'),
        actorRole2: Yup.string().required('Pole jest wymagane'),
      }),
      onSubmit: async ({
        title,
        genre,
        director,
        length,
        rate,
        plot,
        img,
        actorFirstName,
        actorLastName,
        actorImg,
        actorRole,
        actorFirstName1,
        actorLastName1,
        actorImg1,
        actorRole1,
        actorFirstName2,
        actorLastName2,
        actorImg2,
        actorRole2,
      }) => {
        const movie = {
          title,
          genre,
          director,
          length,
          rate,
          plot,
          img,
          actors: [
            {
              firstName: actorFirstName,
              lastName: actorLastName,
              img: actorImg,
              role: actorRole,
            },
            {
              firstName: actorFirstName1,
              lastName: actorLastName1,
              img: actorImg1,
              role: actorRole1,
            },
            {
              firstName: actorFirstName2,
              lastName: actorLastName2,
              img: actorImg2,
              role: actorRole2,
            },
          ],
        };
        axios
          .post('https://filmlybackend.herokuapp.com/api/movies', movie, {
            headers: {
              'content-type': 'application/json',
              'x-auth-token':
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWUxNjAzYjZhNWY2ZTY0ZmZjNjU2ZjIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDIzNDAxNDl9.-E5-BK4o2AB0mQOxUQuMQiJtUaq5n7pikIF6nVspI-Q',
            },
          })
          .then(function (response) {
            history.push('/admin/movies');
          })
          .catch(function (error) {
            console.log(error.response);
            console.log(error);
          });
      },
    });
  const handleBack = () => {
    history.push('/admin/movies');
  };
  return (
    <Card className={styles.form__wrapper}>
      <Button onClick={handleBack}>Wróć</Button>
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
          id='img'
          name='img'
          className={styles.form__input}
          placeholder='Adres grafiki'
          value={values.img}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.img && errors.img ? errors.img : ' '}
        </div>
        <h3> Aktorzy</h3>
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
          id='actorRole'
          name='actorRole'
          className={styles.form__input}
          placeholder='Rola'
          value={values.actorRole}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorRole && errors.actorRole ? errors.actorRole : ' '}
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
          id='actorFirstName1'
          name='actorFirstName1'
          className={styles.form__input}
          placeholder='Imię aktora'
          value={values.actorFirstName1}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorFirstName1 && errors.actorFirstName1
            ? errors.actorFirstName1
            : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorLastName1'
          name='actorLastName1'
          className={styles.form__input}
          placeholder='Nazwisko aktora'
          value={values.actorLastName1}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorLastName1 && errors.actorLastName1
            ? errors.actorLastName1
            : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorRole1'
          name='actorRole1'
          className={styles.form__input}
          placeholder='Rola'
          value={values.actorRole1}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorRole1 && errors.actorRole1 ? errors.actorRole1 : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorImg1'
          name='actorImg1'
          className={styles.form__input}
          placeholder='Adres grafiki aktora'
          value={values.actorImg1}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorImg1 && errors.actorImg1 ? errors.actorImg1 : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorFirstName2'
          name='actorFirstName2'
          className={styles.form__input}
          placeholder='Imię aktora'
          value={values.actorFirstName2}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorFirstName2 && errors.actorFirstName2
            ? errors.actorFirstName2
            : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorLastName2'
          name='actorLastName2'
          className={styles.form__input}
          placeholder='Nazwisko aktora'
          value={values.actorLastName2}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorLastName2 && errors.actorLastName2
            ? errors.actorLastName2
            : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorRole2'
          name='actorRole2'
          className={styles.form__input}
          placeholder='Rola'
          value={values.actorRole2}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorRole2 && errors.actorRole2 ? errors.actorRole2 : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id='actorImg2'
          name='actorImg2'
          className={styles.form__input}
          placeholder='Adres grafiki aktora'
          value={values.actorImg2}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.actorImg2 && errors.actorImg2 ? errors.actorImg2 : ' '}
        </div>
        <Button
          type='submit'
          fullwidth={true}
          className={styles.form__button}
          secondary={true}
        >
          Potwierdź
        </Button>
      </form>
    </Card>
  );
};

export default MovieAddForm;
