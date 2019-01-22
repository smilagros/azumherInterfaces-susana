//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//Routes
import AppRoutes from './routes';

//Assets
import './index.css';

//Serivces
import * as serviceWorker from './serviceWorker';

render(
    <Router>
        <AppRoutes />
    </Router>, 
    document.getElementById('root')
);
serviceWorker.unregister();
