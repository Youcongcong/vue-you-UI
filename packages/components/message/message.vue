<template>
  <div class='yui-mask-dialog' >
    <div class='yui-message  animated zoomIn' >
      <Icon class="messicon" :type="icon" v-if="icon" :color="iconcolor"></Icon>
      <span v-html="msg"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yui-message',
  props: {
    msg: String,
    timeout: {
      type: Number,
      default: 2000
    },
    callback: Function,
    icon: String,
    iconcolor:String
  },
  data() {
    return {
      show: true
    };
  },
  mounted () {
    // document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    setTimeout(() => {
      // 销毁组件
      this.$el.remove()
      // document.getElementsByTagName('html')[0].style.overflow = 'initial'
    }, this.timeout)
  }
};
</script>
