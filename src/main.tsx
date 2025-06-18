import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from '../components/Navbar'

// Ensure the root element exists and has proper styling
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Apply base styles to root element to prevent layout issues
rootElement.style.height = '100%';
rootElement.style.minHeight = '100vh';
rootElement.style.margin = '0';
rootElement.style.padding = '0';

// Mount the React app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)