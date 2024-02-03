import React from 'react';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// import { persistor, store } from './redux-state/store';
import { store } from './redux-state/store';

import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={null}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
