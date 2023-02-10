import { useState } from "react";
import { postCommentApi } from "./api";
const PostComment = ({ article_id }) => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [data, setData] = useState({});
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ username: user, body: comment });
    postCommentApi(article_id, data).then((newCommentFromApi) => {
      console.log(newCommentFromApi);
    });
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
    </section>
  );
};

export default PostComment;
