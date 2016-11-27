/**
 * @file redux中间件 支持异步
 * @author hancong
 * @date 2016-5-24
 */

import _ from 'lodash';
import fetch from './utils/fetch';

/**
 * 生成中间件
 *
 * @param {Object} extraArg 参数
 * @return {Function}
 */
function createAsyncMiddleware(extraArg = {}) {
    let ext = {};
    return arg => next => action => {
        if (typeof action === 'function') {
            _.forEach(extraArg, (value, key) => ext[key] = typeof value === 'function' ? value(arg) : value);
            return action({...arg, ...ext});
        }
        return next(action);
    };
}

const async = createAsyncMiddleware({fetch});
async.withExtraArgument = createAsyncMiddleware;

export default async;
