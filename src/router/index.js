import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/database',
            name: 'Database',
            component: () => import('../views/Database.vue')
        },
        {
            path: '/whitepapers',
            name: 'WhitePapers',
            component: () => import('../views/WhitePapers.vue')
        },
        {
            path: '/resources',
            name: 'Resources',
            component: () => import('../views/Resources.vue')
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/whitepapers/:id',
            name: 'eventSingle',
            component: () => import('../views/EventSingle.vue')
        }
    ]
})


