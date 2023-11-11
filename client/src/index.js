import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the element in your HTML where you want to mount your React application
const container = document.getElementById('root');

// Create a root for your application
const root = createRoot(container);

// Initial render: Render the <App> component to the DOM
root.render(<App />);
