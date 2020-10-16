import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import layout from '../views/supplier/supplier-layout'

export const routerMap = [
    { path: '/login', component: () => import('../views/login/index'), hidden: true },
    {
        path: '/supplier',
        component: layout,
        redirect: '/supplier/home',
        children: [
            {
                path: 'home',
                component: () => import('../views/supplier/home')
            },
            {
                path: 'finance',
                component: () => import('../views/supplier/finance')
            },
            {
                path: 'sign-inline',
                component: () => import('../views/supplier/sign-inline')
            },
            {
                path: 'user-info',
                component: () => import('../views/supplier/finance')
            },
            {
                path: 'password',
                component: () => import('../views/supplier/finance')
            }
        ]
    },
    { path: '', redirect: '/login' }
]

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routerMap
})