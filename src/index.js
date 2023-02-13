import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContectProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContectProvider>
      <App />
    </ContectProvider>
  </React.StrictMode>
);
