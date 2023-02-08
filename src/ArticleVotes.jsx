import { fetchComments } from "./api";
import { useState, useEffect } from "react";
const ArticleVotes = ({ article_id }) => {
  const [votes, setVotes] = useState(0);
  useEffect(() => {
    fetchComments(article_id).then(({ data: { comments } }) => {
      console.log(comments.votes);
      setVotes(comments.votes);
    });
  }, [article_id]);
  return (
    <section>
      <h4>{votes}</h4>
    </section>
  );
};

export default ArticleVotes;
