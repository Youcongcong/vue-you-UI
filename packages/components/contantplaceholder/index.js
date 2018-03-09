let origData = ''
const install = (Vue) => {
  Vue.directive('cplace', {
    //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind(el, binding, vnode) {
      //绑定的数据源
      origData = binding.value.data
      //初始化没有数据时 背景填充阴影
      if (!binding.value.data) {
        let _placeholder = '<div class="animated-background" style="';
        const defaultConfig = {
          width: '100%',
          height: '100%',
        };
        const _configObj = {
          ...defaultConfig,
          transition: 'all .3s'
        };
        Object.keys(_configObj).forEach((style) => {
          _placeholder += `${style}:${_configObj[style]};`
        })
        _placeholder += '"></div>'
        //最后得到填充的Dom
        el.innerHTML = _placeholder
      } else {
        el.innerHTML = binding.value.data
      }
    },
    //所在组件的 VNode 更新时调用，
    update(el, binding) {
      if (el.children[0] && binding.value.data !== origData) {
        el.children[0].style.opacity = 0
        setTimeout(() => {
          el.innerHTML = binding.value.data
        }, 300)
      }
    }
  })
}
export default install
