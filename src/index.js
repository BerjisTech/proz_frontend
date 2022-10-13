import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";

// core UI
import '@coreui/coreui/dist/css/coreui.min.css'

// Styles
import './index.css';

import LogRocket from 'logrocket';
LogRocket.init('2pkhka/prozreactfrontend');

createRoot(document.getElementById('root')).render(<App />);
