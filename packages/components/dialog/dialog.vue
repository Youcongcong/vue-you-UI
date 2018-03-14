<template>
  <div>
    <transition name="yui-dialog-bounce">
      <div class="yui-dialog" v-show="value">
        <div class="yui-dialog__header" v-if="title" v-text="title" />
        <div class="yui-dialog__content yui-hairline">
          <slot>
            <div class="yui-dialog__message" v-if="message" :class="{ 'yui-dialog__message--withtitle': title }" v-html="message" />
          </slot>
        </div>
        <div class="yui-dialog__footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
          <Button size="large" class="yui-dialog__cancel" v-show="showCancelButton" @click="handleAction('cancel')">
            {{ cancelButtonText}}
          </Button>
          <Button size="large" class="yui-dialog__confirm" :class="{ 'yui-hairline--left': showCancelButton && showConfirmButton }" v-show="showConfirmButton" @click="handleAction('confirm')">
            {{ confirmButtonText }}
          </Button>
        </div>
      </div>
    </transition>
    <transition name="yui-fade">
      <div class="yui-modal" v-show="value"></div>
    </transition>
  </div>
</template>

<style lang="less">
  @import './dialog.less';
</style>

<script>
  export default {
    name: 'Dialog',
    props: {
      value: false,
      title: String,
      message: String,
      callback: Function,
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      showCancelButton: Boolean,
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      overlay: {
        type: Boolean,
        default: true
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: false
      },
      lockOnScroll: {
        type: Boolean,
        default: true
      }
    },
  
    methods: {
      handleAction(action) {
        this.$emit('input', false);
        this.$emit(action);
        this.callback && this.callback(action);
      }
    }
  };
</script>
