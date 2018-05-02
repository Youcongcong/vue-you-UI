<template>
    <div class="aaa">
        <div class="header">
            <div class="left" @click="goback"><</div>
            <div class="title">button</div>
        </div>
        <div>
            <Button>Default</Button>
        <Button disabled type="primary">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="warning">warning</Button>
        <Button type="warning" border="circle">border</Button>

        <Button type="primary" border="circle" iconame="ios-search">search</Button>

        <Button type="primary" border="circle-outline" iconame="ios-search" iconcolor="red"></Button>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            goback () {
                this.$router.goBack(this,'/')
            }
        }
    }
</script>
