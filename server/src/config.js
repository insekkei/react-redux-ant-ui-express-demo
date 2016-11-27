/**
 * @file app配置
 * @author hancong
 * @date 16/10/27.
 */

module.exports = {
    // app server启动配置
    SERVERCONFIG: {
        apiDir: 'api',
        // 后端接口host
        apiBackEndHost: '',
        // 是否mock，true时请求${path}-mock.js
        isMock: 1,
        // app port
        port: process.env.PORT || 3001,
        // 开发／生产环境
        nodeEnv: process.env.NODE_ENV || 'dev',
        // 单位：MB
        postLimit: 1
    }
};
