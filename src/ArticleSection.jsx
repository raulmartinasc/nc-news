import ArticleList from "./ArticleList";
import { useState, useEffect } from "react";
import { fetchAllArticles } from "./api";
import { useSearchParams } from "react-router-dom";
const ArticleSection = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const sortByTopic = searchParams.get("topic");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchAllArticles(sortByTopic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [sortByTopic]);

  return (
    <section>
      <ArticleList articles={articles} isLoading={isLoading} />
    </section>
  );
};

export default ArticleSection;
