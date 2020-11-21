import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({

    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('./views/Register.vue')
        }
    ]

})

export default router