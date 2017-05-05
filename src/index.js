import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router';
import App from './App';
import Home from './Home';
import NotFound from './NotFound';
import './index.css';

const history = createHistory();
ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </App>
    </Router>,
    document.getElementById('app')
);
