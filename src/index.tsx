import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import type { ReactElement } from 'react';

// Typed ReactDOM.render to ensure App is ReactElement
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Typed reportWebVitals if you have it in setupTests.js
const reportWebVitals = (onPerfEntry?: any) => {
  if (typeof onPerfEntry === 'function') {
    onPerfEntry(performance.now());
  }
};

export default root;