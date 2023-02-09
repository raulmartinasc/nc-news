const Comments = ({ comments }) => {
  return (
    <section>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4>{comment.author}: </h4>
              <p>{comment.body}</p>
              <h4>Likes : {comment.votes}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
