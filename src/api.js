import axios from "axios";
export const fetchAllArticles = () => {
  return axios.get("https://nc-news-api-mq3o.onrender.com/api/articles");
};
export const fetchArticlesById = (article_id) => {
  return axios.get(
    `https://nc-news-api-mq3o.onrender.com/api/articles/${article_id}`
  );
};
export const fetchComments = (article_id) => {
  return axios.get(
    `https://nc-news-api-mq3o.onrender.com/api/articles/${article_id}/comments`
  );
};
