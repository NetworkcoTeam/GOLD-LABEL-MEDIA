import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './CSSNeeded/VRBackground.css'; // Your custom CSS

// Ensure you're using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)