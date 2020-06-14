import './assets/css/common.less';
// 除了require()有路径自动上寻找node_modules目录外
// import ... from ...也有路径自动上寻找node_modules目录的功能
import Vue from 'vue';
import VueRouter from 'vue-router';
import Music from 'zhuofeng/Music';
import App from 'zhuofeng/App';

Vue.use(VueRouter);
const router = new VueRouter();
router.addRoutes([
    {
        name: 'music',
        path: '/music',
        component: Music,
    }
]);

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});