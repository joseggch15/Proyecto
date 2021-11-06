import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = "/home" component = {Home} />
        <Route path = "/" component = {App}>
        </Route>
    </Router>
));

