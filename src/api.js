import axios from "axios";
export const fetchAllArticles = (arrayOfTopics) => {
  return axios
    .get("https://nc-news-api-mq3o.onrender.com/api/articles", {
      params: {
        topic: arrayOfTopics,
      },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
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

export const patchVotes = (increment, article_id) => {
  return axios.patch(
    `https://nc-news-api-mq3o.onrender.com/api/articles/${article_id}`,
    { inc_votes: increment }
  );
};

export const postCommentApi = (article_id, user, comment) => {
  return axios
    .post(
      `https://nc-news-api-mq3o.onrender.com/api/articles/${article_id}/comments`,
      { username: user, body: comment }
    )
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const fetchAllTopics = () => {
  return axios
    .get("https://nc-news-api-mq3o.onrender.com/api/topics")
    .then(({ data: { topics } }) => {
      return topics;
    });
};
