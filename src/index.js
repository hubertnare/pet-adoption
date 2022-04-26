import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// contexts
import { PetProvider } from './contexts/PetContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PetProvider>
      <App />
    </PetProvider>
  </React.StrictMode>
);
