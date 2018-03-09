<template>
    <div>
        <div class="header">
            <div class="left" @click="goback"><</div>
            <div class="title">Skeleton Screen</div>
        </div>
        <div v-for="i in 3" class="lis">
            <h1 v-cplace="{ data: title }"></h1>
            <p v-cplace="{ data: content1 }"></p>
            <p v-cplace="{ data: content2, config }"></p>
            <div class="disfl">
                <span class="aa" v-cplace="{ data: src }"><img width='50px' height='50px'/></span>
                <a href="" v-cplace="{ data: gitUrl }"></a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                m1: 'yes',
                title: '',
                content1: '',
                content2: '',
                gitUrl: '',
                src: '',
                config: {
                    width: '200px',
                    height: '18px',
                    background: '#ddd'
                }
            }
        },
        methods: {
            change(status) {
                console.log(status)
            },
            goback () {
                this.$router.goBack(this,'/')
            }
        },
        mounted() {
            setTimeout(() => {
                this.title = '测试测试测试测试测试'
                this.src = '测试试'
                this.content1 = '测试测试测试测试测试测试测试测试测试 '
                this.content2 = '测试测试测试测试测试测试测试测试测试'
                this.gitUrl = '测试测试测试测试测试测试测试测试测试'
            }, 3000)
        }
    }
</script>

<style lang="less" scoped>
    .disfl{
        display:flex;
        width:100%;
        .aa {
            width: 50px;
            height: 50px;
            margin-right:20px;
            display: inline-block
        }
        a{
            flex:1
        }
    }
    .lis{
        padding:0 10px;
        margin:30px 0;
        h1,p{
            width:100%;
        }
       
    }
    
    
    h1 {
        margin-top: 0;
        margin-bottom: 10px;
        width: 100%;
        height: 48px;
        font-size: 30px;
        text-align: center;
    }
    
    p {
        width: 50%;
        min-width: 350px;
        height: 18px;
        font-size: 16px;
        text-align: center;
        margin-bottom: 10px;
    }
    
    img[src=""] {
        opacity: 0;
    }
    
    a {
        color: #000;
        outline: none;
        display: inline-block;
        height: 50px;
        float: right;
        text-align: center;
    }
</style>