import './App.css';
import './index';

function App(props) {
  return (
    <div className="App">
      <h1>{props.post.title}</h1>
      <h3>Written by {props.post.author}</h3>
      <p>{props.post.body}</p>
      <h2>Comments:</h2>
      <p>{props.post.comments[0]}</p>
    </div>
  );
}

export default App;