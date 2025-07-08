import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// ✅ Global styles
import './index.css';
// ✅ Devicon icons (make sure devicon is installed)
import 'devicon/devicon.min.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
