<template>
    <button
        :type="htmlType"
        @click="handleClick"
        :class="classes"
        >
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
           
           
            htmlType: {
                default: 'button',
                validator (value) {
                    return $oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            
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
                        [ `${preCls}-${this.type}`]:!!this.type
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
