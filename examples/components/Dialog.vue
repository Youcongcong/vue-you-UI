<template>
    <div>
        <div class="header">
            <div class="left" @click="goback"><</div>
        <div class="title">button</div>
        </div>
        <Button @click="alert">Default</Button>
       
    </div>
</template>
<script>
    export default {
        methods: {
            goback () {
                this.$router.goBack(this,'/')
            },
            alert(){
                this.$dialog.Dialog.confirm({
                    title: '1',
                    message:'2'
                });
            }
        }
    }
</script>
