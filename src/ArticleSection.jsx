import ArticleList from "./ArticleList";
import ArticleVotes from "./ArticleVotes";
import { useState, useEffect } from "react";
import { fetchAllArticles } from "./api";
const ArticleSection = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchAllArticles().then(({ data: { articles } }) => {
      setArticles(articles);
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
