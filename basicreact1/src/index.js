import React from 'react';
//react is core foundational libary
//reactdom is a implementation on web,   just like react native on mobile
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
