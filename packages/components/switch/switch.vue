<template>
    <span :class="wrapClasses" @click="toggle">
        <input type="hidden" :name="name" :value="currentValue"/>
         <span class="yui-switch-inner">
            <slot name="open" v-if="currentValue === true"></slot>
            <slot name="close" v-if="currentValue === false"></slot>
        </span>
    </span>
</template>

<script>
    const preCls = 'yui-switch';
    
    export default {
        name: 'ySwitch',
        data() {
            return {
                currentValue:this.value
            }
        },
        props:{
            value:{
                type:[String,Number,Boolean],
                default:false
            },
            name:null,
            trueValue:true,
            falseValue:false

        },
        methods:{
            toggle(){
                const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;
                this.currentValue = checked;
                this.$emit('input', checked);
                this.$emit('on-change', checked);
            }
        },
        computed:{
            wrapClasses () {
                return [
                    `${preCls}`,
                    {
                        [`${preCls}-checked`]: this.currentValue === this.trueValue,
                    }
                ];
            },
        },
        watch: {
            value (val) {
                if (val !== this.trueValue && val !== this.falseValue) {
                    throw 'Value should be trueValue or falseValue.';
                }
                this.currentValue = val;
            }
        }
    }
</script>
