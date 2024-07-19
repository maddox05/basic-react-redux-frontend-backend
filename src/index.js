import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import App from './app/main/App.js';
import store from './app/store/index.js';
import FlashSuccess from './app/sharedComponents/FlashSuccess/index.js';
import FlashError from './app/sharedComponents/FlashError/index.js';

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Segment basic>
          <FlashError />
          <FlashSuccess />
        </Segment>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main />);
