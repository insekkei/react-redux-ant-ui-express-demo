/**
 * @file express server
 * @author hancong
 * @date 2016-10-29
 */

'use strict';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fallback from 'express-history-api-fallback';
import session from 'express-session';

import apiMap from './router/apiMap';

import {SERVERCONFIG} from './config';
const {port, nodeEnv, postLimit} = SERVERCONFIG;

let app = express();

// use session
app.use(session({
    secret: 'demo',
    resave: false,
    saveUninitialized: false
}));

// static files
let root = path.resolve(__dirname, '../../client/build/');
app.use(express.static(root));

// SPA refresh 404 resolution
app.use(fallback('index.html', {root}));


// map request path to api file
app.use(bodyParser.urlencoded({limit: `${postLimit}MB`, extended: true}));
app.use(bodyParser.json({limit: `${postLimit}MB`}));
app.use(apiMap);

// server start
if (!module.parent) {
    app.listen(port, function () {
        console.log('\n Express app listening on port ' + port + '.');
    });
}
