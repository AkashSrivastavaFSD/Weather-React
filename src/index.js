// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
//import { Provider } from 'react-redux';
//import { store } from './redux/store'; // Adjust the path as necessary
import App from './App'; // Your main App component

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Use createRoot for concurrent mode

root.render(
  
    <App />
 
);
