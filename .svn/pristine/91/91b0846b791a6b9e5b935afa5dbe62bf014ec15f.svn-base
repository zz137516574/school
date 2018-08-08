import iView from 'iview';
import VueRouter from 'vue-router';
import Util from '../libs/util';
import  routes from './';


// 路由配置
const RouterConfig = {
    //取消#号
    mode: 'history',
    routes: routes
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    // console.log("to is " + JSON.stringify(to));
    // console.log("from is " + JSON.stringify(from));

  iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;
