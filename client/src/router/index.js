import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import {authGuard} from "../auth/authGuard";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/store',
            name: 'store',
            component: () => import('../views/Store.vue')
        },
        {
            path: '/event/:id',
            name: 'eventSingle',
            component: () => import('../views/EventSingle.vue'),
            beforeEnter: authGuard
        }
    ]
})
