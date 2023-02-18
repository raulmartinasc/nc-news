import { useState } from "react";
import { postCommentApi } from "./api";
const PostComment = ({ article_id, setComments }) => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.length || !comment.length) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      postCommentApi(article_id, user, comment).then((newCommentFromApi) => {
        setComments((currentComments) => [
          newCommentFromApi,
          ...currentComments,
        ]);
      });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <label htmlFor="comment">Comment: </label>
        <input
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button type="submit">Submit Comment</button>
      </form>
      {isEmpty && <p>Fields can not be empty</p>}
    </section>
  );
};

export default PostComment;
