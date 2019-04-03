import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

// Create store
const store = createStore(reducers);

ReactDOM.render(
  // Render App component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
