<template>
    <button
        :type="htmlType"
        @click="handleClick"
        :class="classes"
        :size="size"
        :disabled="disabled"
        >
        <Icon :type="iconame" v-if="iconame" :color="iconcolor"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<style lang="less">
     @import './button.less';
</style>
<script>
    import {  $oneOf } from '../../untils/assits.js';

    const preCls = 'you-btn';

    export default {
        name: 'Button',
        
        components: {  },
        props: {
            type: {
                validator (value) {
                    return $oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default']);
                }
            },
            disabled:Boolean,
            iconcolor:String,
            iconame:String,
            border:{
                validator (value) {
                    return $oneOf(value, ['circle', 'circle-outline']);
                }
            },
            htmlType: {
                default: 'button',
                validator (value) {
                    return $oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            size:{
                validator (value) {
                    return $oneOf(value, ['small', 'middle', 'large']);
                }
            }
            
        },
        data () {
            return {
                showSlot: true
            };
        },
        computed: {
            classes(){
                return [
                    `${preCls}`,{
                        [ `${preCls}-${this.type}`]:!!this.type,
                        [ `${preCls}-${this.border}`]:!!this.border,
                        [ `${preCls}-${this.size}`]:!!this.size
                    }
                ]
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined
        }
    };
</script>
