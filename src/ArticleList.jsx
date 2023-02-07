const ArticleList = ({ articles }) => {
  console.log(articles);
  return (
    <section className="articleList">
      <h2 id="h2">Articles</h2>
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
