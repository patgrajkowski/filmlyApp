import * as Yup from 'yup';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CommentsForm = ({ movieId, reloadComments }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useHistory();
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
      onSubmit: async ({ comment }, { resetForm }) => {
        if (isLoggedIn) {
          axios
            .post(
              `https://filmlybackend.herokuapp.com/api/comments/movie/${movieId}`,
              { comment },
              {
                headers: {
                  'content-type': 'application/json',
                  'x-auth-token': authCtx.token,
                },
              }
            )
            .then(function (response) {
              reloadComments();
              resetForm({});
            })
            .catch(function (error) {
              console.log(error.response);
            });
        } else {
          console.log('Niezalogowany');
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
