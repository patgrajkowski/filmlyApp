import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.css';
import Card from '../../UI/Card/Card';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import axios from 'axios';
import { fetchCustomer } from '../../../helpers/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../../../store/store';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: ' ',
        password: ' ',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Wprowadź poprawny adres email')
          .required('Email jest wymagany.'),
        password: Yup.string()
          .min(6, 'Hasło musi posiadać conajmniej 6 znaków')
          .required('Hasło jest wymagane'),
      }),
      onSubmit: async ({ email, password }) => {
        console.log(email);
        const response = await fetchCustomer(`/api/customers/${email}`);
        if (response.password === password)
          dispatch(authAction.login(response._id));
        console.log(response.password);
        history.push('/moje-wypozyczenia');
      },
    });
  return (
    <Card className={styles.wrapper}>
      <h2 className={styles.form__title}>Zaloguj się</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id='email'
          name='email'
          type='text'
          className={styles.form__input}
          placeholder='E-mail'
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.email && errors.email ? errors.email : ' '}
        </div>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          type='password'
          id='password'
          name='password'
          className={styles.form__input}
          placeholder='Hasło'
          value={values.password}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.password && errors.password ? errors.password : ' '}
        </div>
        <Button
          type='submit'
          fullwidth={true}
          className={styles.form__button}
          secondary={true}
          disabled={errors.password || errors.email || !touched.email}
        >
          Zaloguj się
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
