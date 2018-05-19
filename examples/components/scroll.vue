<template>
    <Scroll v-model="isLoading" @refresh="onRefresh">
        <p>请切换手机模式查看</p>
        <p> 下拉刷新次数：{{ count }}</p>
    </Scroll>
</template>

<script>
export default {
  

  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>

<style lang="postcss">
  .van-pull-refresh {
    &,
    &__track {
      height: 100%;
    }
  }

  p {
    margin: 10px 0;
  }
</style>
