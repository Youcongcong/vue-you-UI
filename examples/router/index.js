import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import button from '../components/button.vue';
import scroll from '../components/scroll.vue';
import radio from '../components/radio.vue';
import checkbox from '../components/checkbox.vue';
import loading from '../components/loading.vue';
import aswitch from '../components/switch.vue';
import message from '../components/message.vue';


export default new Router({
    routes: [
        {
            path: '/message',
            component: message,
        },
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
        },{
            path:'/checkbox',
            component: checkbox,
        },{
            path:'/loading',
            component: loading,
        },{
            path:'/aswitch',
            component: aswitch,
        }
    ]
})
