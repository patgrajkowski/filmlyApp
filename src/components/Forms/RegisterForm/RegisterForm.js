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
        email: '',
        password: '',
        avatar: '',
        confirmPassword: '',
      },
      validationSchema: Yup.object({
        nickname: Yup.string()
          .min(5, 'Nickname musi mieć conajmniej 5 znaków')
          .required('Nickname jest wymagany'),
        email: Yup.string()
          .email('Wprowadź poprawny adres email')
          .required('Email jest wymagany.'),
        avatar: Yup.string()
          .matches(
            /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i,
            'Link jest niepoprawny'
          )
          .required('Adres url jest wymagany'),
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
      onSubmit: ({ nickname, email, password, avatar }) => {
        axios
          .post(
            'https://filmlybackend.herokuapp.com/api/users',
            { nickname, email, password, avatar },
            {
              headers: {
                'content-type': 'application/json',
              },
            }
          )
          .then(function (response) {
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
          value={values.avatar}
          onChange={handleChange}
          onBlur={handleBlur}
          id='avatar'
          name='avatar'
          type='text'
          className={styles.form__input}
          placeholder='URL do avatara'
        ></Input>
        <div className={styles.form__errorMessage}>
          {touched.avatar && errors.avatar ? errors.avatar : ' '}
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
          id='register'
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
