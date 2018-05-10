<template>
    <div class="aaa">
        <pre>
1231231231231231
  333333333
    44444444
        4555555
            
        </pre>
        <mar></mar>
    </div>
</template>
<script>
    import mar from './test.md'
    export default {
        methods: {
            goback () {
                this.$router.goBack(this,'/')
            }
        },
        components:{
            mar
        }
    }
</script>
<style>
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
</style>
