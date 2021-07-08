import VueRouter from 'vue-router'
import Vue from 'vue';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('@/components/LandingPage.vue')
        }],
    mode: 'history'
    })

export default router;