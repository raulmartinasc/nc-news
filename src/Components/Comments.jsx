import PostComment from "./PostComment";
import { deleteComments } from "../api";
import { useState } from "react";
const Comments = ({
  comments,
  article_id,
  setComments,
  setIsDeleted,
  isDeleted,
}) => {
  const [error, setError] = useState(null);
  const [isPosted, setIsPosted] = useState(0);
  const handleDelete = (id) => {
    setIsDeleted(true);
    deleteComments(id)
      .then(() => {
        setIsDeleted(false);
      })
      .catch((err) => {
        setError({ err });
      });
  };
  if (error) {
    return <p>An error has occured deleting your comment.</p>;
  }
  return (
    <section className="comment-container">
      <h1 className="comment-title">Comments</h1>
      <PostComment
        setIsPosted={setIsPosted}
        setComments={setComments}
        article_id={article_id}
      />
      {isDeleted && <p>Deleting comment...</p>}
      <ul>
        {comments.map((comment) => {
          return (
            <li className="individual-comment" key={comment.comment_id}>
              <h4 className="comment-author">{comment.author}: </h4>
              <p className="comment-body">{comment.body}</p>{" "}
              <button
                className={isPosted ? "button-active" : "button-disabled"}
                onClick={() => handleDelete(comment.comment_id)}
              >
                Delete Comment
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
