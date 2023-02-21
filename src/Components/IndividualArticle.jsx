import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import { fetchArticlesById, fetchComments } from "../api";
import ArticleVotes from "./ArticleVotes";
import ErrorPage from "./ErrorPage";
import "./IndividualArticle.css";
const IndividualArticle = () => {
  const [individualArticle, setIndividualArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState(null);

  const { article_id } = useParams();
  useEffect(() => {
    fetchArticlesById(article_id)
      .then(({ data: { article } }) => {
        setIndividualArticle(article);
      })
      .catch((err) => {
        setError({ err });
      });
    fetchComments(article_id)
      .then(({ data: { comments } }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [article_id, isLoading, isDeleted]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (error) {
    return <ErrorPage />;
  } else {
    return (
      <section className="individual-article">
        <h1 className="individual-title">{individualArticle.title}</h1>
        <img
          className="individual-img"
          src={individualArticle.article_img_url}
          alt=""
        ></img>
        <ArticleVotes article_id={article_id} />
        <p className="individual-body">{individualArticle.body}</p>
        <Comments
          comments={comments}
          article_id={article_id}
          setComments={setComments}
          setIsDeleted={setIsDeleted}
          isDeleted={isDeleted}
        />
      </section>
    );
  }
};

export default IndividualArticle;
