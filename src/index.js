import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const post = {
  title: 'Why Dinosaurs Should Rule the World Again',
  author: 'Tommy T-Rex',
  body: 'The reason is simple: because people are runing it.',
  comments: ['Amen, brother.', 'Dinosaurs would probably ruin it too.', 'Weirdest blog ever.']
};

ReactDOM.render(
  <React.StrictMode>
    <App post={post} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
