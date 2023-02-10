import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import { fetchArticlesById, fetchComments } from "./api";
import ArticleVotes from "./ArticleVotes";
const IndividualArticle = () => {
  const [individualArticle, setIndividualArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();
  useEffect(() => {
    fetchArticlesById(article_id).then(({ data: { article } }) => {
      setIndividualArticle(article);
    });
    fetchComments(article_id).then(({ data: { comments } }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <section>
        <h3>{individualArticle.title}</h3>
        <img src={individualArticle.article_img_url} alt=""></img>
        <h4>User: {individualArticle.author}</h4>
        <ArticleVotes article_id={article_id} />
        <p>{individualArticle.body}</p>
        <Comments comments={comments} article_id={article_id} />
      </section>
    );
  }
};

export default IndividualArticle;
