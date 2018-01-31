import Vue from 'vue';
import Button from './components/button/index'
import Icon from './components/icon/index'
import Scroll from './components/scroll/index'
import Radio from './components/radio/index'
import Checkbox from './components/checkbox/index'
const components = {
    Button,
    Icon,
    Scroll,
    Radio,
    RadioGroup: Radio.Group,
    Checkbox
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
//install(Vue);

const API = {
    install,
    ...components
};



export default API