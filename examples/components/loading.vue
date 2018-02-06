<template>
    <Loading v-show="showloading">登录中...</Loading>
</template>

<script>
    export default {
        data() {
            return {
                showloading:true
            }
        },
        mounted(){
            let that = this
            setTimeout(function(){
                that.showloading = false
            },2000)
        }
    }
</script>