import { useState } from "react";
import axios from "axios";
const Comments = ({ comments, article_id }) => {
  const [votes, setVotes] = useState(0);
  const handleClick = (increment) => {
    axios
      .patch(
        `https://nc-news-api-mq3o.onrender.com/api/articles/${article_id}`,
        { inc_votes: increment }
      )
      .then(({ data }) => {
        console.log(data);
      });
  };
  return (
    <section>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4>{comment.author}: </h4>
              <p>{comment.body}</p>
              <h4>Votes: {comment.votes}</h4>
              <button onClick={handleClick(1)}>UpVote</button>
              <button onClick={handleClick(-1)}>DownVote</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
