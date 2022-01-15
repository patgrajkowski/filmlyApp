import * as Yup from 'yup';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const CommentsForm = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        comment: '',
      },
      validationSchema: Yup.object({
        comment: Yup.string()
          .min(10, 'Komentarz musi mieć conajmniej 10 znaków')
          .required(''),
      }),
      onSubmit: async ({ comment }) => {
        if (isLoggedIn) {
          console.log(isLoggedIn);
        } else {
          console.log(isLoggedIn);
        }
      },
    });
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <h2>Dodaj komentarz</h2>
      <textarea
        onBlur={handleBlur}
        onChange={handleChange}
        type='comment'
        id='comment'
        name='comment'
        value={values.comment}
        placeholder='Dodaj publiczny komentarz'
      ></textarea>
      <div>{touched.comment && errors.comment ? errors.comment : ' '}</div>
      <Button type='submit' disabled={!values.comment || errors.comment}>
        Dodaj
      </Button>
    </form>
  );
};

export default CommentsForm;
