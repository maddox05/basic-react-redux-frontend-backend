import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main />);
