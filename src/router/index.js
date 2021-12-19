import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../components/views/Home.vue')
    },
    {
        path: '/creditos',
        name: 'Creditos',
        component: () => import(/* webpackChunkName: "creditos" */ '../components/views/Creditos.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router