import { Link } from "react-router-dom";
import "./ArticleList.css";
const ArticleList = ({ articles, isLoading, setOrder, setSortBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };
  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="articleList">
      <section className="sort-menu">
        <label className="sort-title" htmlFor="sort-by">
          Sort by:{" "}
        </label>
        <select name="sort" id="sort" onChange={handleSortChange}>
          <option value="choose">Choose an option..</option>
          <option value="description">Description</option>
          <option value="votes">Votes</option>
          <option value="title">Article Name</option>
        </select>
        <select onChange={handleOrderChange}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </section>
      <section className="all-articles">
        {articles.map((article) => {
          return (
            <article key={article.article_id} className="each-article">
              <Link
                className="articleLinks"
                to={`/articles/${article.article_id}`}
              >
                {" "}
                <h3 className="articleTitle">{article.title}</h3>
              </Link>
              <Link to={`/articles/${article.article_id}`}>
                <img
                  alt={article.description}
                  className="images"
                  src={article.article_img_url}
                />
              </Link>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default ArticleList;
