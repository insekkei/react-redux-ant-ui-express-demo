# react-redux-ant-ui-express-demo

## 项目运行方法：

* 安装依赖

    npm install

* 启动express server

    npm start

* 新建console tab，编译client/src（编译后文件在client/build下）

    npm run build

访问：http://localhost:3001/

## 项目架构说明：

    react + redux + react-router + antUI，webpack打包

### client/src/app

* action:
 
数据请求写在这里

* reducer

修改state

* containers

路由相关的组件，Layout为页面结构，routes中为children

* components

containers里各自的组件

* less

样式文件

### client/src/www

* font

由于antUI字体cdn不支持百度域名，因此将css移入`www`中并修改字体地址为`www/font/`，在index.html中单独引用，`.babelrc`中ant相关的配置里，style设置为false。

* lib

antd.min.css

* index.html

### server

* api

处理前端请求

* router

后端路由

