import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const IndividualArticle = () => {
  const [individualArticle, setIndividualArticle] = useState({});
  const { article_id } = useParams();
  console.log(individualArticle);
  useEffect(() => {
    axios
      .get(`https://nc-news-api-mq3o.onrender.com/api/articles/${article_id}`)
      .then(({ data: { article } }) => {
        setIndividualArticle(article);
      });
  }, [article_id]);
  return (
    <section>
      <h3>{individualArticle.title}</h3>
      <img src={individualArticle.article_img_url}></img>
      <h4>User: {individualArticle.author}</h4>
      <p>{individualArticle.body}</p>
    </section>
  );
};

export default IndividualArticle;
