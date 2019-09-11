import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        // {
        // path: '/',
        // component: () => import('@/components/HelloWorld'),
        // },
        {
            name: "home",
            path: "/home",
            component: () => import("@/components/HelloWorld")
        },
        {
            name: "register",
            path: "/register",
            component: () => import("@/components/Register")
        },
    ]
})