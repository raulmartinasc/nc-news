import ArticleList from "./ArticleList";
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
    </section>
  );
};

export default ArticleSection;
