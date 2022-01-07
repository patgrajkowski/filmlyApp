import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '../../UI/Input/Input';
import Card from '../../UI/Card/Card';
import styles from './RegisterForm.module.css';
import Button from '../../UI/Button/Button';

const RegisterForm = () => {
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
        confirmPassword: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Hasła muszą być takie same'
        ),
      }),
      onSubmit: ({ email, password }) => {
        console.log(`Email: ${email}, password: ${password}`);
      },
    });
  return (
    <Card className={styles.wrapper}>
      <h2 className={styles.form__title}>Zarejestruj się</h2>
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
