import ArticleList from "./ArticleList";
import ArticleVotes from "./ArticleVotes";
import { useState, useEffect } from "react";
import axios from "axios";
const ArticleSection = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://nc-news-api-mq3o.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <ArticleList articles={articles} isLoading={isLoading} />
      <ArticleVotes />
    </section>
  );
};

export default ArticleSection;
