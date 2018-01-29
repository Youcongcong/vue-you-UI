<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    import {$oneOf,findComponentsDownward} from '../../untils/assits.js';
    const preCls = 'yui-radio-group'
    export default {
        name: 'RadioGroup',
        props:{
            value: {
                type: [String, Number],
                default: ''
            },
            type:{
                validator(value){
                    return $oneOf(value,['tab'])
                }
            }
        },
        computed:{
            classes(){
                return[
                    `${preCls}`,
                    {
                        [`${preCls}-${this.type}`]: !!this.type,
                    }
                ]
            }
        },
        data(){
            return{
                childrens: []
            }
        },
        methods:{
            updateValue(){
                const value = this.value;
                this.childrens = findComponentsDownward(this,'Radio');
                if(this.childrens){
                    this.childrens.forEach(child =>{
                        child.group = true;
                        child.currentValue = value == child.label;
                    })
                } 
            },
            change(data){
                this.updateValue();
                this.$emit('input',data.value);
                this.$emit('on-change', data.value);
            }
        },
         watch: {
            value () {
                this.updateValue();
            }
        },
        mounted () {
            this.updateValue();
        },
    
    }
</script>
<style lang="less">
   
</style>
