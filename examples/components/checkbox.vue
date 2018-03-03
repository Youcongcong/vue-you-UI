<template>
    <div>
        <Checkbox  v-model="qq">11</Checkbox>
        <Checkbox  >22</Checkbox>
        <br/>
        <Checkbox v-model="a" :trueValue="1" :falseValue="0">测试</Checkbox>{{a}}
        <CheckboxGroup v-model="arr">
            <Checkbox label="1"></Checkbox>
            <Checkbox label="2"></Checkbox>
            <Checkbox label="3"></Checkbox>
            <Checkbox label="4"></Checkbox>
        </CheckboxGroup>
        {{arr}}
    </div>
</template>
<script>
    export default {
        data(){
            return{
                qq:false,
                a:null,
                arr:['1']
            }
        }
    }
</script>
