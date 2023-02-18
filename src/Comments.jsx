import PostComment from "./PostComment";
import { deleteComments } from "./api";
const Comments = ({ comments, article_id, setComments , setIsDeleted, isDeleted}) => {
  const handleDelete = (id) => {
    setIsDeleted(true)
    deleteComments(id).then(()=> {
      setIsDeleted(false)
    })
  }
  return (
    <section>
      <h1>Comments</h1>
      <PostComment setComments={setComments} article_id={article_id} />
      {isDeleted && <p>Deleting comment...</p>}
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4>{comment.author}: </h4>
              <p>{comment.body}</p>
              <button onClick={()=> handleDelete(comment.comment_id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;
