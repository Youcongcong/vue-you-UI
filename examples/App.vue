

                            
              
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less">
  @import 'highlight.js/styles/color-brewer.css';
  .tip {
    padding: 8px 16px;
    background-color: #ECF8FF;
    border-radius: 4px;
    border-left: #50bfff 5px solid;
    margin: 20px 0;
    code {
      background-color: rgba(255, 255, 255, .7);
      color: #445368;
    }
  }
  
  .warning {
    padding: 8px 16px;
    background-color: #fff6f7;
    border-radius: 4px;
    border-left: #FE6C6F 5px solid;
    margin: 20px 0;
    code {
      background-color: rgba(255, 255, 255, .7);
      color: #445368;
    }
  }
  
  body {
    margin: 0 auto;
  }
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  .header {
    width: 100%;
    height: 44px;
    background: #0058f1;
    color: #fff;
    line-height: 44px;
    text-align: center;
  }
  
  .header .left {
    position: absolute;
    font-size: 20x;
    font-weight: bold;
    padding: 0px 20px;
  }
</style>

