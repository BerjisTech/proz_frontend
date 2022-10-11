import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";

// Styles
import './index.css';


createRoot(document.getElementById('root')).render(<App />);
