import React from 'react';
import ReactDOM from 'react-dom'; // react dom shows the react component.
import App from './App.js';
import 'semantic-ui-css/semantic.min.css';

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
