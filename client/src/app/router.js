/**
 * @file demo 路由配置
 * @author hancong
 * @date 2016-10-25
 */

import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {Layout, Login} from './containers';

export default ({history}) => (
    <Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Login} />
            <Route path="login" component={Login} />
        </Route>
    </Router>
);
