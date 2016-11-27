/**
 * @file 根据请求path解析到对应的js文件
 * @author hancong
 * @date 2016-10-29
 */

import _ from 'lodash';
import fs from 'fs';
import express from 'express';
import xml2js from 'xml2js';
import path from 'path';
import fetch from 'isomorphic-fetch';

import {SERVERCONFIG} from '../config';
const {nodeEnv, isMock, apiDir} = SERVERCONFIG;
const serverPath = '../' + apiDir.replace(/[\\\/]?$/, '/');
let router = express.Router();

function getLocalApi(req, res, apiPath, params) {
    // 获取文件路径
    let file = path.resolve(__dirname, serverPath + apiPath + (isMock ? '-mock.js' : '.js'));

    // 判断文件是否存在，若文件不存在返回错误
    let isExist = fs.existsSync(file);
    if (!isExist) {
        return {errorCode: 500, message: 'error in server: invalid API path.', data: null};
    }

    // 如果文件存在，返回请求到的数据
    let result = require(file);
    let resp = _.isPlainObject(result)
        ? new Promise(function (resolve) { resolve(result); })
        : result(req, res, apiPath, params);
    return resp;
}

router.all('/request.ajax*', function (req, res, next) {
    // 解析出path
    let body = req.body;
    let path = body.path || req.query.path;
    if (!path) {
        return res.json({errorCode: 500, message: 'error in server: empty API path.', data: null});
    }

    // 解析出参数
    let params = typeof body.params === 'string' ? JSON.parse(body.params) : body.params;

    // 获取对应文件的数据
    getLocalApi(req, res, path, params).then(function (result) {
        res.json(result);
    });
});

export default router;
