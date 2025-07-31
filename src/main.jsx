import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { TaskProviderWrapper } from './context/task.context.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <TaskProviderWrapper>
      <App />
    </TaskProviderWrapper>
  </HashRouter>
);
