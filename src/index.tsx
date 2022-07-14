import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './styles/index.css';

createRoot(document.getElementById('app')! as HTMLElement).render(<App />);
