<style lang="less">
    @import "../packages/style/common/normalize.less";
    @import "../packages/style/iconfont/ionicons.less";
</style>
<style scoped>
nav { margin-bottom: 40px; }
ul { display: flex; flex-wrap: wrap; }
li { display: inline-block; }
li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
.container{ padding: 10px 40px 0; }
.v-link-active { color: #bbb; }
</style>
<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/button">Button</router-link></li>
                <li><router-link to="/scroll">Scroll</router-link></li>
                <li><router-link to="/radio">Radio</router-link></li>
                <li><router-link to="/checkbox">Checkbox</router-link></li>
                <li><router-link to="/loading">loading</router-link></li>
                
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
