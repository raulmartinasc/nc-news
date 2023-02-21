import { useState, useEffect } from "react";
import { fetchArticlesById, patchVotes } from "../api";
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
    <section className="vote-section">
      <h4 className="title-votes">Votes: {votes}</h4>
      {err ? <p>{err}</p> : null}
      <i
        class="fa-solid fa-thumbs-up fa-lg"
        onClick={() => {
          handleVotesClick(1);
        }}
      ></i>
      <i
        class="fa-solid fa-thumbs-down fa-lg"
        onClick={() => {
          handleVotesClick(-1);
        }}
      ></i>
    </section>
  );
};

export default ArticleVotes;
