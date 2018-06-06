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
      isLoading: false,
      id:''
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    fn(){
      const that = this;
      return new Promise((resole,reject)=>{
        setTimeout(function(){
          that.id = 1
          console.log(3000)
          resole(that.id)
        },3000)
      }).catch(err=>{
        reject(err)
      })
    },
    fn1(){
      const that = this;
      return new Promise((resole,reject)=>{
        setTimeout(function(){
          console.log(2000)
          console.log(that.id)
        },2000)
      }).catch(err=>{
        reject(err)
      })
    },
    async q(){
      await this.fn();
      await this.fn1()
    }
  },
  mounted(){
    this.q()
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
