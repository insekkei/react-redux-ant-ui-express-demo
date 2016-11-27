/**
 * @file AJAX 扩展options.data支持post json；统一错误信息处理
 * @author hancong
 * @date 2016-5-30
 */
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
import {message} from 'antd';

const BASE_URL = '/request.ajax';
const OK_STATUS = 200;
const BASE_ERROR_STATUS = 400;

export default function () {
    return function (path, options) {
        let ext = {};
        // 不传options时，默认params为空
        !options && (options = {params: {}});
        // 传options.params时，自动包装fetch请求，且兼容原生fetch的options
        if (_.isPlainObject(options.params)) {
            options.path = path;

            let body = [];
            _.forEach(options, (item, key) => {
                body.push(key + '=' + encodeURIComponent(_.isPlainObject(item) ? JSON.stringify(item) : item));
            });
            ext = {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: body.join('&')
            };
        }

        return fetch.call(this, BASE_URL + '?path=' + path, Object.assign({}, options, ext))
            .then(res => {
                return Promise.resolve(res.json());
            })
            .catch(_.noop)
            .then(function (res) {
                if (res.status === 505) {
                    message.error('网络错误，请稍候再试。');
                }
                return Promise.resolve(res);
            });
    };
}
