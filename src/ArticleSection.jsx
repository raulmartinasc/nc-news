import ArticleList from "./ArticleList";
import { useState, useEffect } from "react";
import { fetchAllArticles } from "./api";
import { useParams } from "react-router-dom";
const ArticleSection = () => {
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { topic } = useParams();
  useEffect(() => {
    fetchAllArticles(topic, sort_by, order).then((articlesFromApi) => {
      console.log(articlesFromApi);
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic, sort_by, order]);

  return (
    <section>
      <ArticleList
        setSortBy={setSortBy}
        setOrder={setOrder}
        articles={articles}
        isLoading={isLoading}
      />
    </section>
  );
};

export default ArticleSection;
