/**
 * @file demo app reducer
 * @author hancong
 * @date 2016-10-25
 */

const initialState = {
    example: ''
};

export default function update(state = initialState, action) {
    switch (action.type) {
        case 'setExample':
            return Object.assign({}, state, {
                example: action.payload
            });
        default:
            return state;
    }
}