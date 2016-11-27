/**
 * @file request example
 * @author hancong
 * @date 2016-11-16
 */

import {fetchData} from '../../util/fetchData';

module.exports = (req, res, apiPath, params) => {
    return fetchData(req, res, '/getProductInfo', params)
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
};