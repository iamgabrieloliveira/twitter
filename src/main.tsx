import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainRoutes} from "./route";
import {BrowserRouter as Router} from "react-router-dom";
import './styles/__global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <MainRoutes/>
        </Router>
    </React.StrictMode>
)
