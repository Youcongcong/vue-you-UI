import Vue from 'vue';
import Button from './components/button/index'
import Icon from './components/icon/index'
const components = {
    Button,
    Icon
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
install(Vue);

const API = {
    install,
    ...components
};



export default API