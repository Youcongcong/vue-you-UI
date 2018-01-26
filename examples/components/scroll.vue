<template>
    <div>
        <Scroll :topLoad="topLoad"  :loading="toploading" :bottomLoad="bomload" :boloading="bomloading">
            <section v-for="item in list">
                <div class="city">
                    <div>{{ item }}</div>
                </div>
            </section>
        </Scroll>
         <Button type="warning" border="circle" @click="test()">border</Button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                toploading:false,
                bomloading:false,
                list:[1,2,3,4,5,5,6,7,8]
            }
        },
        methods:{
            topLoad(){
                this.toploading = !this.toploading
                // setTimeout(() => {
                //     this.toploading = !this.toploading
                // }, 1000);
            },
            bomload(){
                let that = this
                this.bomloading = true
                   
                
            },
            test(){
                this.toploading = true
            }
        },
        mounted(){

        }
        
    }
</script>
<style lang="">
    .city{
        height:40px;
        line-height:40px;
        text-align:center
    }
</style>
 