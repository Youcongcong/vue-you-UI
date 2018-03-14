<template>
    <div>
        <div class="header">
            <div class="left" @click="goback"><</div>
        <div class="title">Dialog</div>
        </div>
        <Button @click="alert">confim</Button>
        <Button @click="alert1">无标题无取消</Button>
        <Button @click="alert2">无取消</Button>
        
       
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
                    title:'提示' ,
                    message:'成功',
                    confirmButtonText:'OK'
                }).then(() => {
                    // on confirm
                    console.log('ok')
                }).catch(() => {
                    // on cancel
                    console.log('cancel')
                });
            },
            alert1(){
                this.$dialog.Dialog.alert({
                    message:'2',
                    confirmButtonText:'OK'
                }).then(() => {
                    // on confirm
                    console.log('ok')
                })
                
            },
            alert2(){
                this.$dialog.Dialog.alert({
                    title:'提示' ,
                    message:'2',
                    confirmButtonText:'OK'
                }).then(() => {
                    // on confirm
                    console.log('ok')
                })
                
            }
        }
    }
</script>
