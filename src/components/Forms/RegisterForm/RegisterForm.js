import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '../../UI/Input/Input';
import Card from '../../UI/Card/Card';
import styles from './RegisterForm.module.css';
import Button from '../../UI/Button/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const RegisterForm = () => {
  const history = useHistory();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: ' ',
        password: ' ',
      },
      validationSchema: Yup.object({
        nickname: Yup.string()
          .min(5, 'Nickname musi mieć conajmniej 5 znaków')
          .required('Nickname jest wymagany'),
        email: Yup.string()
          .email('Wprowadź poprawny adres email')
          .required('Email jest wymagany.'),
        password: Yup.string()
          .min(6, 'Hasło musi posiadać conajmniej 6 znaków')
          .required('Hasło jest wymagane'),
        confirmPassword: Yup.string().test(
          'passwords-match',
          'Hasła muszą być takie',
          function (value) {
            return this.parent.password === value;
          }
        ),
      }),
      onSubmit: ({ nickname, email, password }) => {
        console.log(`Email: ${email}, password: ${password}`);
        axios
          .post(
            'https://filmly-backend.herokuapp.com/api/users',
            { nickname, email, password },
            {
              headers: {
                'content-type': 'application/json',
              },
            }
          )
          .then(function (response) {
            console.log(response);
            history.push('/');
          })
          .catch(function (error) {
            console.log(error.response);
          });
      },
    });
  return (
    <Card className={styles.wrapper}>
      <h2 className={styles.form__title}>Zarejestruj się</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          value={values.nickname}
          onChange={handleChange}
          onBlur={handleBlur}
          id='nickname'
          name='nickname'
          type='text'
          className={styles.form__input}
          placeholder='Nickname'
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.nickname && errors.nickname ? errors.nickname : ' '}
        </div>
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
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          className={styles.form__input}
          placeholder='Powtórz hasło'
          value={values.confirmPassword}
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.confirmPassword && errors.confirmPassword
            ? errors.confirmPassword
            : ' '}
        </div>
        <Button
          type='submit'
          fullwidth={true}
          className={styles.form__button}
          secondary={true}
          disabled={
            errors.password ||
            errors.email ||
            errors.confirmPassword ||
            !touched.email
          }
        >
          Zarejestruj się
        </Button>
      </form>
    </Card>
  );
};
export default RegisterForm;
