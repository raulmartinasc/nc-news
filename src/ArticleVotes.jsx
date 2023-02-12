import { useState, useEffect } from "react";
import { fetchArticlesById, patchVotes } from "./api";
const ArticleVotes = ({ article_id }) => {
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);
  useEffect(() => {
    fetchArticlesById(article_id).then(({ data: { article } }) => {
      setVotes(article.votes);
    });
  }, [article_id]);

  const handleVotesClick = (increment) => {
    setVotes((currentCount) => (currentCount += increment));
    setErr(null);
    patchVotes(increment, article_id).catch((err) => {
      setVotes((currentCount) => currentCount - increment);
      setErr("Something went wrong, please try again.");
    });
  };
  return (
    <section>
      <h4>Votes: {votes}</h4>
      {err ? <p>{err}</p> : null}
      <button
        onClick={() => {
          handleVotesClick(1);
        }}
      >
        Upvote
      </button>
      <button
        onClick={() => {
          handleVotesClick(-1);
        }}
      >
        Downvote
      </button>
    </section>
  );
};

export default ArticleVotes;
