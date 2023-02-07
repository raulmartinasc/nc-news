const ArticleList = ({ articles, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="articleList">
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <h3 className="articleTitle">{article.title}</h3>
              <img
                alt={article.description}
                className="images"
                src={article.article_img_url}
                width="200"
                height="150"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleList;
