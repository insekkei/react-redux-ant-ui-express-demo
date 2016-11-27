/**
 * @file demo app入口
 * @author hancong
 * @date 2016-10-25
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer, routerMiddleware} from 'react-router-redux';
import asyncMiddleware from './middleware/redux-async';
import * as reducers from './reducers';
import Routers from './router';
const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const routerActionMiddleware = routerMiddleware(browserHistory);
const store = createStore(
    reducer,
    compose(
        applyMiddleware(routerActionMiddleware, asyncMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const history = syncHistoryWithStore(browserHistory, store);

// Render the main app react component into the app div.
ReactDOM.render(
    <Provider store={store}>
        <Routers history={history} />
    </Provider>, document.getElementById('app')
);
