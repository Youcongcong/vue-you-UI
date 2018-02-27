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

<style lang="less">
.messicon{
    margin-right: 4px;
    font-size: 14px;
    top: 1px;
    position: relative;
}
.yui-mask-dialog {
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-boyui-pack: center;
  -webkit-justify-content: center;
  -ms-fleyui-pack: center;
  justify-content: center;
  -webkit-boyui-align: center;
  -webkit-align-items: center;
  -ms-fleyui-align: center;
  align-items: center;
}
.yui-message {
  padding: 4px 16px;
  padding: 16px;
  font-size: 14px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #495060;
  animation: zoomIn .15s ease forwards;
}
.animated {
  animation-fill-mode: both;
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }
  50% {
    opacity: 1;
  }
}
</style>