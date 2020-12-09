import './App.css';
import './index';
import Dino from './Dino';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: ''
    };
  }

  handleClick = (event) => {
    const currentArray = this.state.comments;
    currentArray.push(this.state.newComment);
    this.setState({ comments: currentArray });
    event.target.previousElementSibling.value = '';
  };

  handleChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Dino
          title={this.props.post.title}
          author={this.props.post.author}
          body={this.props.post.body}
          comments={this.state.comments}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
