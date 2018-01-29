<template>
    <label 
        :class="wrapClasses"
        @keyup.space="change">
            <span :class="radioClasses">
                <span class="yui-radio-inner"></span>
                <input 
                    type="radio"
                    class="yui-raido-input"
                    :disabled="disabled"
                    :checked="currentValue"
                    :name="name"
                    @change="change"
                />
            </span>
            <slot>{{label}}</slot>
        </label>
</template>
<style lang="less">
     @import './radio.less';
</style>
<script>
    const preCls = 'yui-radio'
    import {  $oneOf ,findComponent} from '../../untils/assits.js';
    export default {
        name: 'Radio',
        props: {
            label: {
                type: [String, Number]
            },
            disabled:{
                type:Boolean,
                default:false
            },
            value:{
                type:[String,Number,Boolean],
                default:false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            name:{
                type:String
            },
            size:{
                validator(value){
                    return $oneOf(value,['small','large','default'])
                }
            }
        },
        computed:{
            radioClasses(){
                return[
                     `${preCls}`,
                     {
                         [`${preCls}-checked`]: this.currentValue,
                         [`${preCls}-disabled`]: this.disabled
                     }
                ]
            },
            wrapClasses(){
                return [
                    `${preCls}-wrapper`,{
                        [`${preCls}-wrapper-checked`]: this.currentValue,
                        [`${preCls}-${this.size}`]:!!this.size
                    }
                ]
            }
        },
        data(){
            return{
                currentValue:this.value ,
                group:false,
                parent: findComponent(this,'RadioGroup')     
            }
        },
        methods:{
            change(event){
                if(this.disabled){
                    return false
                }
                const checked = event.target.checked;
                this.currentValue = checked;
                let value = checked ? this.trueValue : this.falseValue;
                this.$emit('input',value)

                if(this.group && this.label !== undefined){
                    this.parent.change({
                        value:this.label,
                        checked:this.value
                    })
                }
                if(!this.group){
                    this.$emit('on-change', value);
                }
            },
            updateValue(){
                this.currentValue = this.value === this.trueValue;
                
            }
        },
        watch: {
            value (val) {
                if (val !== this.trueValue && val !== this.falseValue) {
                    throw 'Value should be trueValue or falseValue.';
                }
                console.log(val,11111)
                this.updateValue();
            }
        },
        mounted () {
            if (this.parent) this.group = true;
            if (!this.group) {
                this.updateValue();
            } else {
                this.parent.updateValue();
            }
        },
    }
</script>

