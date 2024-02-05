import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { persistor, store } from './redux-state/store';

import { App } from 'App';
import './index.css';

const theme = extendTheme({
  colors: {
    gray: {
      200: '#E2E8F0',
    },
    cyan: {
      100: '#C4F1F9',
      400: '#0BC5EA',
    },
  },
  fonts: {
    body: 'YourSansSerifFont, sans-serif',
    heading: 'YourSansSerifFont, sans-serif',
  },
  fontSizes: {
    sm: '14px',
    md: '18px',
    lg: '24px',
    xl: '36px',
  },
  radii: {
    md: '8px',
  },
  shadows: {
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
