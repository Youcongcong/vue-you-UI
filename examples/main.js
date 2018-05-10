import Vue from 'vue';
import App from './App.vue';
import router from './router';
import youUI from '../packages/index';
import  '../packages/style/index.less';
import demoBlock from './components/demo-block.vue'
import 'normalize.css/normalize.css'
Vue.component('demo-block', demoBlock)
//console.log(youUI)
Vue.use(youUI);

// 开启debug模式
Vue.config.debug = true;
Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})
