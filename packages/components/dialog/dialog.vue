<template>
  <transition name="van-dialog-bounce">
    <div class="van-dialog" v-show="value">
      <div class="van-dialog__header" v-if="title" v-text="title" />
      <div class="van-dialog__content van-hairline">
        <slot>
          <div class="van-dialog__message" v-if="message" :class="{ 'van-dialog__message--withtitle': title }" v-html="message" />
        </slot>
      </div>
      <div class="van-dialog__footer" :class="{ 'is-twobtn': showCancelButton && showConfirmButton }">
        <Button
          size="large"
          class="van-dialog__cancel"
          v-show="showCancelButton"
          @click="handleAction('cancel')"
        >
          {{ cancelButtonText}}
        </Button>
        <Button
          size="large"
          class="van-dialog__confirm"
          :class="{ 'van-hairline--left': showCancelButton && showConfirmButton }"
          v-show="showConfirmButton"
          @click="handleAction('confirm')"
        >
          {{ confirmButtonText }}
        </Button>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Dialog',
  props: {
    title: String,
    message: String,
    callback: Function,
    confirmButtonText: String,
    cancelButtonText: String,
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
<style lang="less">

.van-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 85%;
  font-size: 16px;
  overflow: hidden;
  transition: .2s;
  border-radius: 4px;
  background-color: #fff;
  transform: translate3d(-50%, -50%, 0);
  
  &__header {
    padding: 15px 0 0;
    text-align: center;
  }

  &__content {
    &::after {
      border-bottom-width: 1px;
    }
  }

  &__message {
    line-height: 1.5;
    padding: 15px 20px;

    &--withtitle {
      color: #ccc;
      font-size: 14px;
    }
  }

  &__footer {
    overflow: hidden;

    &.is-twobtn {
      display: flex;

      .van-button {
        flex: 1;
      }
    }
  }

  .van-button {
    border: 0;
  }

  &__confirm {
    &,
    &:active {
      color: #00C000;
    }
  }

  &-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }

  &-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
}

</style>