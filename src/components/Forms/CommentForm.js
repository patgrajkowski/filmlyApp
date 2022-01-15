import * as Yup from 'yup';
import { useFormik } from 'formik';
import React from 'react';
import Button from '../UI/Button/Button';

const CommentsForm = () => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        comment: '',
      },
      validationSchema: Yup.object({
        comment: Yup.string().test(
          'empty-or-10-characters-check',
          'Komentarz musi mieć conajmniej 10 znaków',
          (comment) => comment.length == !0 || comment.length >= 10
        ),
      }),
      onSubmit: async ({ comment }) => {
        console.log(comment);
      },
    });
  return (
    <form onSubmit={handleSubmit} autocomplete='off'>
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
      <Button type='submit' disabled={values.comment == 0 || errors.comment}>
        Dodaj
      </Button>
    </form>
  );
};

export default CommentsForm;
