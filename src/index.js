import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Segment } from 'semantic-ui-react';

import App from 'src/app/main/App.js';
import store from 'src/app/store/index.js';
import FlashMessage from 'src/app/sharedComponents/FlashMessage/index.js';

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Segment basic>
          <FlashMessage />
        </Segment>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main />);
