<template>
    <div>
        <y-switch v-model="m1" trueValue="yes" falseValue="false">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </y-switch>
        {{ m1 }}

        <h1 v-cplace="{ data: title }"></h1>
        <p v-cplace="{ data: content1 }"></p>
        <p v-cplace="{ data: content2, config }"></p>
        <a href="https://github.com/jrainlau/vue-occupy" v-cplace="{ data: gitUrl }"></a>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: 'yes',
                title: '',
                content1: '',
                content2: '',
                gitUrl: '',
                config: {
                    width: '200px',
                    height: '18px',
                    background: '#ddd'
                }
            }
        },
        methods: {
            change (status) {
                console.log(status)
            },

        },
        mounted(){
            setTimeout(() => {
            this.title = 'Vue-Occupy'
            this.content1 = 'A Vue directive for occupying content places before the data has been loaded.'
            this.content2 = 'It\'s good for user experiment improving'
            this.gitUrl = 'Fork me on Github!'
            }, 1500)
        }
    }
</script>
<style lang="less">
  
   
    h1 {
      margin-top: 0;
      margin-bottom: 40px;
      width: 300px;
      height: 48px;
      font-size: 48px;
      text-align: center;
    }
    p {
      width: 50%;
      min-width: 350px;
      height: 18px;
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;
    }
    a {
      color: #000;
      margin-top: 20px;
      outline: none;
      width: 300px;
      display:inline-block;
      height: 18px;
      text-align: center;
    }
    </style>