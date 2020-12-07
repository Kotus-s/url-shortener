import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Redirect from '@/views/Redirect.vue'

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:id',
        name: 'Redirect',
        component: Redirect
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

