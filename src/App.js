import React from 'react';
import Asteroids from './containers/Asteroids/Asteroids';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import logo from './assets/logo.png';

import { Link, Route } from 'react-router-dom';
import asyncComponent from './utils/hocs/asyncComponent';

const AsyncMars = asyncComponent(() => {
    return import('./containers/Mars/Mars');
});

console.log(logo,'=>> logo')
export default function App() {
    return (
        <Provider store={store}>
        <div className="app_wrapper">
            <img src={logo} className="logo"/>
            <div className="menu">
                <Link to="/">Астероиды</Link>
                <Link to="/mars">Картинки марса</Link>
            </div>
            <div className="page_wrap">
                <Route path="/" exact component={Asteroids}/>
                <Route path="/mars" component={AsyncMars}/>
            </div>
        </div>
        </Provider>
    )
};