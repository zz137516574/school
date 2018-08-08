import Env from './env';

/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * appName: 平台名称
 */
let baseUrl = '';
let routerMode = 'history';
let baseImgPath = 'http://images.cangdu.org/';
let appName = '网络商学院管理平台';

if (Env == 'development') {
    baseUrl = 'http://192.168.2.91/';
}else{
    baseUrl = 'http://cangdu.org:8001';
}


export {
    baseUrl,
    routerMode,
    baseImgPath,
    appName,
};
