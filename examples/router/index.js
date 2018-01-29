import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import button from '../components/button.vue';
import scroll from '../components/scroll.vue';
import radio from '../components/radio.vue';


export default new Router({
    routes: [
        {
            path: '/button',
            component: button,
        },
        {
            path: '/scroll',
            component: scroll,
        },
        {
            path:'/radio',
            component: radio,
        }
    ]
})
