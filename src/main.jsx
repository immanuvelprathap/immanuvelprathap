import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalStyles from './styles/GlobalStyle.js';
import Typography from './styles/Typography.js';

// --- ADD THIS BLOCK --- refresh issue
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <App />
  </React.StrictMode>,
)

// import React from 'react';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import GlobalStyles from './styles/GlobalStyle.js';
// import Typography from './styles/Typography.js';


// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <GlobalStyles />
//     <Typography />
//     <App />
//   </React.StrictMode>,
// )
