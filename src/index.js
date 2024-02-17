import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
