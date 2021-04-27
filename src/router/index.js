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
            path: '/funding',
            name: 'funding',
            component: () => import('../views/Funding.vue')
        },
        {
            path: '/financing',
            name: 'financing',
            component: () => import('../views/Financing.vue'),
            beforeEnter: authGuard
        },
        {
            path: '/entrepreneurship',
            name: 'entrepreneurship',
            component: () => import('../views/Entrepreneurship.vue')
        },
        {
            path: '/event/:id',
            name: 'eventSingle',
            component: () => import('../views/EventSingle.vue'),
            beforeEnter: authGuard
        }
    ]
})
