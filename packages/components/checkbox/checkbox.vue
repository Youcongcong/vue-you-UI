<template>
    <label :class="wrapClasses">
            <span :class="checkboxClasses">
                <span :class="innerClasses"></span>
                <input
                    v-if="group"
                    type="checkbox"
                    :class="inputclasse"
                    :disabled="disabled"
                    :value="label"
                    v-model="model"
                    :name="name"
                    @change="change"
    
                />
                <input
                    v-else
                    type="checkbox"
                    :class="inputclasse"
                    :disabled="disabled"
                    :checked="currentValue"
                    :name="name"
                    @change="change"
    
                />
            </span>
            <slot><span v-if="showSlot">{{label}}</span></slot>
        </label>
</template>
<style lang="less">
     @import './checkbox.less';
</style>
<script>
    import {$oneOf,findComponent} from '../../untils/assits.js';
    const prefixCls = 'yui-checkbox'
    export default {
        name: 'Checkbox',
        props: {
            disabled: {
                type: Boolean,
                default:false
            },
            value:{
                type: [String, Number, Boolean],
                default: false
            },
            label:{
                type: [String, Number, Boolean],
            },
            name:{
                type:String
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
        },
        computed:{
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.disabled,
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            checkboxClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-indeterminate`]: this.indeterminate
                    }
                ];
            },
            innerClasses () {
                return [
                    `${prefixCls}-inner`,
                    {
                        [`${prefixCls}-focus`]: this.focusInner
                    }
                ];
            },
            inputclasse () {
                return `${prefixCls}-input`;
            }
        },
        data(){
            return{
                group:false,
                currentValue:this.value,
                model:[],
                showSlot:true
            }
        },
        methods:{
            change(){
                if (this.disabled) {
                    return false;
                }

                const checked = event.target.checked;
                this.currentValue = checked;

                const value = checked ? this.trueValue : this.falseValue;
                this.$emit('input', value);

               
            },
            update(){
                this.currentValue = this.value === this.trueValue
            }
        },
        watch:{
            value(val){
                if (val === this.trueValue || val === this.falseValue) {
                    this.update();
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            }
        }
    }
</script>