/**
 * @file mock example
 * @author hancong
 * @date 2016-11-04
 */
let Promise = require('es6-promise').Promise;

module.exports = (req, res, apiPath, params) => {

    return Promise.resolve({
        status: 200,
        msg: '',
        body: {
            product: {
                productId: '1',
                productName: '土豪氪金高富帅VIP碾压套餐',
                completed: 1, // 0失败，1成功
                object: 1,
                effect: 1,
                versionList: [
                    {
                        versionName: '1.1',
                        versionId: '1111',
                        deployTime: '1478242250037',
                        deployType: 1,
                        picUrl: 'http://www.gbtags.com/gb/laitu/220x100&text=头图/aaaaaa/ffffff',
                        description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
                        moduleList: [1, 2, 3] // TypeList:1：专区头图；2:产品介绍；3:操作指南；4:在线课程；5:调研问卷；6:入口
                    },
                    {
                        versionName: '1.2',
                        versionId: '1112',
                        deployTime: '1478242250037',
                        deployType: 0,
                        picUrl: 'http://www.gbtags.com/gb/laitu/220x100&text=头图/aaaaaa/ffffff', // 待定
                        userList: '小流量名单a', // 待定
                        description: '土豪氪金高富帅VIP碾压套餐', // 待定
                        moduleList: [1, 2, 3] // TypeList:1：专区头图；2:产品介绍；3:操作指南；4:在线课程；5:调研问卷；6:入口
                    }
                ]
            }
        }
    });
};
