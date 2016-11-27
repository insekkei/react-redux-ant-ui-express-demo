/**
 * @file demo login container
 * @author hancong
 * @date 2016-10-25
 */

import {connect} from 'react-redux';
import {Login} from '../../components';
import * as actionCreators from '../../actions/product';

const mapStateToProps = state => {
    return {
        productIntroduction: state.product.productIntroduction,
        productInfo: state.product.productInfo,
        guideList: state.product.guideList,
        isLoading: state.product.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // 操作步骤－获取操作步骤
        getOperationIntroduce(versionId) {
            dispatch(actionCreators.getOperationIntroduce(versionId));
        },
        // 产品介绍－获取产品介绍
        getProductIntroduce(versionId) {
            dispatch(actionCreators.getProductIntroduce(versionId));
        },
        getProductInfo(productId) {
            dispatch(actionCreators.getProductInfo(productId));
        },
        changeLoadingState(loading) {
            dispatch(actionCreators.changeLoadingState(loading));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
