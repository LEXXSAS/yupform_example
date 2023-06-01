import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';

// import './tutorial-4-gen-phrases/App.css'
import './index.css'

import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import './mentorseven/index.css'
// import './style.css'
// import App from './App';


import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);
