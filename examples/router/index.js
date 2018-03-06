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
import dialog from '../components/Dialog.vue';

import Index from '../components/index.vue';
import PageTransition from '../components/PageTransition.vue'
import SkeletonScreen from '../components/SkeletonScreen.vue'

Router.prototype.goBack = function (vue, router) {
    this.isBack = true
    vue.$router.push(router)
}
export default new Router({
    routes:[
        {
          path: '/',
          name: 'PageTransition',
          component: PageTransition,
          children: [{
            path: '',
            component: Index
          }, {
            path: '/message',
            component: message,
        },
        {
            path: '/SkeletonScreen',
            component: SkeletonScreen,
        },
        {
            path: '/button',
            component: button,
        },
        {
            path:'/dialog',
            component:dialog
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
        }]
        }
      ]
})
