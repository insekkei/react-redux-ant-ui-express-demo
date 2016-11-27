/**
 * @file app action
 * @author hancong
 * @date 2016-10-24
 */

export function example(params) {
    return ({dispatch, fetch}) =>
        fetch('example', {params: params})
            .then(json => {
                dispatch(setExample(json.body));
            }).catch(error => {
                console.log(error);
            });
}

function setExample(data) {
    return {
        type: 'setExample',
        payload: data
    };
}