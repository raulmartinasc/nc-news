import { Link } from "react-router-dom";
const ArticleList = ({ articles, isLoading, setOrder, setSortBy }) => {
  const handleSortChange = (e) => {
    console.log(e.target.value);
    setSortBy(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };
  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="articleList">
      <section>
        <label htmlFor="sort-by">Sort by: </label>
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
              <button className="buttonMore">
                {" "}
                <Link to={`/articles/${article.article_id}`}>Read More</Link>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleList;
