/**
 * @file fetchData方法，统一设置host等信息
 * @author hancong
 * @date 2016-11-16
 */
import fetch from 'isomorphic-fetch';
import {SERVERCONFIG} from '../config';
import _ from 'lodash';

module.exports = {
    fetchData(req, res, apiPath, params) {
        let ext = {};
        params = params || {};
        params.userName = req.session.views.userName;
        if (_.isPlainObject(params)) {
            ext = {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            };
        }
        console.log('=================request path================');
        console.log(SERVERCONFIG.apiBackEndHost + apiPath);
        console.log('=================request body================');
        console.log(ext.body);

        return fetch(SERVERCONFIG.apiBackEndHost + apiPath, Object.assign({}, ext))
            .then(response => {
                console.log('=================response success================');
                console.log(response);
                return response.json();
            })
            .catch(error => {
                console.log('=================response error================');
                console.log(error);
                return Promise.resolve({
                    status: 505,
                    msg: '',
                    body: { // 字段没确定
                        error: error
                    }
                });
            });
    }
};
