import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
            }, {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/User.vue')
            },{
                path: "/smartQA",
                name: "smartQA",
                meta: {
                    title: '智能问答'
                },
                component: () => import ( /* webpackChunkName: "smartQA" */ "../views/SmartQA.vue")
            },{
                path: "/relationExtraction",
                name: "relationExtraction",
                meta: {
                    title: '关系抽取'
                },
                component: () => import ( /* webpackChunkName: "relationExtraction" */ "../views/RelationExtraction.vue")
            },{
                path: "/entityRecognition",
                name: "entityRecognition",
                meta: {
                    title: '实体抽取'
                },
                component: () => import ( /* webpackChunkName: "entityRecognition" */ "../views/EntityRecognition.vue")
            },{
                path: "/mapVisualization",
                name: "mapVisualization",
                meta: {
                    title: '图谱可视化'
                },
                component: () => import ( /* webpackChunkName: "mapVisualization" */ "../views/MapVisualization.vue")
            },
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | sun-hao`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;