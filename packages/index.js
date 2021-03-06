import Vue from 'vue';
import VueCplace from './components/contantplaceholder/index'
import Button from './components/button/index'
import Icon from './components/icon/index'
import Scroll from './components/scroll/index'
import Radio from './components/radio/index'
import Checkbox from './components/checkbox/index'
import Loading from './components/loading/index'
import Switch from './components/switch/index'

import Dialog from './components/dialog/index'
import BuyNum from './components/buynum/index'


import  message  from './components/message/message.js'
Vue.use(VueCplace)
const components = {
    Button,
    Icon,
    Scroll,
    Radio,
    RadioGroup: Radio.Group,
    Checkbox,
    CheckboxGroup:Checkbox.Group,
    Loading,
    ySwitch: Switch,
    BuyNum
}

const youUI = {
    ...components,
    yButton: Button
    
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(youUI).forEach(key => {
        
        Vue.component(key, youUI[key]);
        
    });

    
};
Vue.prototype.$dialog = {
    msg: message,
    Dialog:Dialog
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    ...components
};



export default API