import PostComment from "./PostComment";
const Comments = ({ comments, article_id, setComments }) => {
  return (
    <section>
      <h1>Comments</h1>
      <PostComment setComments={setComments} article_id={article_id} />
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
