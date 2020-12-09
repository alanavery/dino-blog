import Comment from './Comment';

function Dino(props) {
  const comments = props.comments.map((comment, index) => {
    return <Comment comment={comment} key={index} />;
  });

  return (
    <div>
      <h1>Title: {props.title}</h1>
      <p>Author: {props.author}</p>
      <p>Body: {props.body}</p>
      <h2>Comments</h2>
      <input onChange={props.handleChange} />
      <button onClick={props.handleClick}>Submit</button>
      {comments}
    </div>
  );
}

export default Dino;
