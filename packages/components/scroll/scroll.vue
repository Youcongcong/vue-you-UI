<template>
  <div class="van-pull-refresh">
    <div
      class="van-pull-refresh__track"
      :style="style"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <div class="van-pull-refresh__head">
        <slot name="normal" v-if="status === 'normal'"/>
        <slot name="pulling" v-if="status === 'pulling'">
          <span class="van-pull-refresh__text">{{ pullingText  }}</span>
        </slot>
        <slot name="loosing" v-if="status === 'loosing'">
          <span class="van-pull-refresh__text">{{ loosingText  }}</span>
        </slot>
        <slot name="loading" v-if="status === 'loading'">
          <div class="van-pull-refresh__loading">
            
            <span>{{ loadingText   }}</span>
          </div>
        </slot>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import scrollUtils from '../../untils/scroll.js';

export default {
  name: 'Scroll',

  props: {
    pullingText: {
      type:String,
      default:'下拉即可刷新'
    },
    loosingText: {
      type:String,
      default:'释放即可刷新'
    },
    loadingText: {
      type:String,
      default:'加载中...'
    },
    value: {
      type: Boolean,
      required: true
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },

  data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    };
  },

  computed: {
    style() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0,${this.height}px, 0)`
      };
    }
  },

  mounted() {
    this.scrollEl = scrollUtils.getScrollEventTarget(this.$el);
    console.log(this.scrollEl)
  },

  watch: {
    value(val) {
      if (!val) {
        this.duration = this.animationDuration;
        this.getStatus(0);
      }
    }
  },

  methods: {
    onTouchStart(event) {
      if (this.status === 'loading') {
        return;
      }
      if (this.getCeiling()) {
        this.duration = 0;
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
      }
    },

    onTouchMove(event) {
      scrollUtils.getScrollTop(this.scrollEl)
      if (this.status === 'loading') {
        return;
      }

      this.deltaY = event.touches[0].clientY - this.startY;
      this.direction = this.getDirection(event.touches[0]);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.preventDefault();
        }
      }
    },

    onTouchEnd() {
      if (this.status === 'loading') {
        return;
      }

      if (this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;
        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(0);
        }
      }
    },

    getCeiling() {
      this.ceiling = scrollUtils.getScrollTop(this.scrollEl) === 0;
      return this.ceiling;
    },

    ease(height) {
      const { headHeight } = this;
      return height < headHeight
        ? height
        : height < headHeight * 2
          ? Math.round(headHeight + (height - headHeight) / 2)
          : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },

    getStatus(height, isLoading) {
      this.height = height;

      const status = isLoading
        ? 'loading' : height === 0
          ? 'normal' : height < this.headHeight
            ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    },

    getDirection(touch) {
      const distanceX = Math.abs(touch.clientX - this.startX);
      const distanceY = Math.abs(touch.clientY - this.startY);
      return distanceX > distanceY ? 'horizontal' : distanceX < distanceY ? 'vertical' : '';
    }
  }
}
</script>
<style lang="less">
    @import './scroll.less';
</style>
