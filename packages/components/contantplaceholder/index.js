let origData = ''

const install = (Vue) => {
    Vue.directive('cplace', {
        bind(el, binding, vnode) {
            console.log(el.tagName)
            //绑定的数据源
            origData = binding.value.data
            //初始化没有数据时 背景填充阴影
            if (!binding.value.data) {
                let _placeholder = '<div style="';
                const defaultConfig = {
                    width: '100%',
                    height: '100%',
                    background: '#eee'
                };
                const _configObj = {
                    ...defaultConfig,
                    ...binding.value._config,
                    transition: 'all .3s'
                };
                Object.keys(_configObj).forEach((style) => {
                    _placeholder += `${style}:${_configObj[style]};`
                })
                _placeholder += '"></div>'
                el.innerHTML = _placeholder
            } else {
                if(el.tagName == 'IMG'){
                    el.setAttribute("src", binding.value.data)
                }else{
                    el.innerHTML = binding.value.data
                }
            }
        },
        update (el, binding) {
            if (el.children[0] && binding.value.data !== origData) {
              el.children[0].style.opacity = 0
              setTimeout(() => {
                if(el.tagName == 'IMG'){
                    el.setAttribute("src", binding.value.data)
                }else{
                    el.innerHTML = binding.value.data
                    
                }
              }, 300)
            }
        }
    })
}
export default install