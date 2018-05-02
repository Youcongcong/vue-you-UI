<template>
  <div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate(to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    }
  }
</script>

<style scoped>
  .child-view {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .5s;
    /* cubic-bezier(.55, 0, .1, 1) */
  }
  
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 1;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  
  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 1;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  
  .header {
    position: absolute;
    height: 44px;
    background: #0058f1;
    width: 100%
  }
</style>
