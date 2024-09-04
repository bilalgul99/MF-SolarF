import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import { MF_SOLARS } from './Store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={MF_SOLARS}>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
  </Provider>,
)
