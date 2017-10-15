import { Router, Route, IndexRoute, Switch } from 'react-router-dom'
import React from 'react'
import { createBrowserHistory } from 'history';
import Home from './Home'
import createStore from '../store'

export default (store) => {
    const history = createBrowserHistory();
    const routes =
        <Router history={history}>
            <Route exact path="/" component={Home} />
        </Router>

    return routes
} 