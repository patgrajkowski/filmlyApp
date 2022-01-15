import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { fetchComments } from '../../helpers/fetchData';
import CommentsForm from '../Forms/CommentForm';
import LoadingSpinner from '../UI/LoadingSpinner';
import styles from './Comments.module.css';
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadCommentsTrigger, setReloadCommentsTrigger] = useState(true);
  const params = useParams();
  const getComments = async () => {
    setIsLoading(true);
    const comments = await fetchComments(
      `/api/comments/movie/${params.movieId}`
    );
    setComments(comments);
    setIsLoading(false);
  };
  const triggerReload = () => {
    setReloadCommentsTrigger(!reloadCommentsTrigger);
  };
  useEffect(() => {
    getComments();
  }, [reloadCommentsTrigger]);
  return (
    <div className={styles.comments}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {comments.length !== 0
            ? comments.map((comment) => (
                <div className={styles.comment__wrapper} key={comment._id}>
                  <img
                    src={comment.user.avatar}
                    alt='avatar'
                    className={styles.comment__avatar}
                  ></img>
                  <div className={styles.comment__user}>
                    <h3 className={styles.comment__nickname}>
                      {comment.user.nickname}
                    </h3>
                    <p className={styles.comment__content}>
                      {comment.comment}{' '}
                    </p>
                  </div>
                </div>
              ))
            : 'Ten film nie ma jeszcze komentarzy'}
        </>
      )}

      <CommentsForm movieId={params.movieId} reloadComments={triggerReload} />
    </div>
  );
};

export default Comments;
