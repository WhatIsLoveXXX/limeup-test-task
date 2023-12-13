import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import RootStore from './store/rootStore.js';
import { ChakraProvider } from '@chakra-ui/react';

const store = RootStore.create({});

export const StoreContext = createContext(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StoreContext.Provider>
  </React.StrictMode>,
);
