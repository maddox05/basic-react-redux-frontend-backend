import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/main/App.js';
import store from './app/store/index.js';

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main />);
