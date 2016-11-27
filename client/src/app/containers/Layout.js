/**
 * @file demo 整体页面布局container
 * @author hancong
 * @date 2016-10-25
 */

import {connect} from 'react-redux';
import Layout from '../components/Layout';
import * as actionCreators from '../actions/app';

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
