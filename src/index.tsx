import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals for performance monitoring
const reportWebVitals = (onPerfEntry?: unknown) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onPerfEntry(performance.now());
  }
};

export default root;