import PostComment from "./PostComment";
const Comments = ({ comments, article_id }) => {
  return (
    <section>
      <h1>Comments</h1>
      <PostComment article_id={article_id} />
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4>{comment.author}: </h4>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
