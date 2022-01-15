import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.css';
import Card from '../../UI/Card/Card';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
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
        axios
          .post(
            'https://filmlybackend.herokuapp.com/api/auth',
            { email, password },
            {
              headers: {
                'content-type': 'application/json',
              },
            }
          )
          .then(function (response) {
            authCtx.login(response.data);
            history.push('/');
          })
          .catch(function (error) {
            console.log(error.response);
          });
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
