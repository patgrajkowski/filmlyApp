import React from 'react';
import styles from './Comments.module.css';
const Comments = () => {
  return (
    <div class={styles.comments}>
      <div class={styles.comment__wrapper}>
        <img
          src='https://i.imgur.com/d2crFEH.png'
          alt='avatar'
          class={styles.comment__avatar}
        ></img>
        <div class={styles.comment__user}>
          <h3 class={styles.comment__nickname}>Patryk</h3>
          <p class={styles.comment__content}>Fajny film</p>
        </div>
      </div>
      <div class={styles.comment__wrapper}>
        <img
          src='https://i.imgur.com/d2crFEH.png'
          alt='avatar'
          class={styles.comment__avatar}
        ></img>
        <div class={styles.comment__user}>
          <h3 class={styles.comment__nickname}>Patryk</h3>
          <p class={styles.comment__content}>Fajny film</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
