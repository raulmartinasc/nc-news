import { useState } from "react";
import { postCommentApi } from "../api";
const PostComment = ({ article_id, setComments, setIsPosted }) => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("jessjelly");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.length || !comment.length) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      setUser("jessjelly");
      postCommentApi(article_id, user, comment).then((newCommentFromApi) => {
        setComments((currentComments) => [
          newCommentFromApi,
          ...currentComments,
        ]);
      });
      setIsPosted(article_id);
      setComment("");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
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
