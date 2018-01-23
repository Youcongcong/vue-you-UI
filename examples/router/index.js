import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import button from '../components/button.vue';
export default new Router({
    routes: [
        {
            path: '/button',
            component: button,
        }
    ]
})
