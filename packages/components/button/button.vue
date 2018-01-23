<template>
    <button
        :type="htmlType"
        @click="handleClick">
    </button>
</template>
<script>
    import {  $oneOf } from '../../untils/assits.js';

    const prefixCls = 'ivu-btn';

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
            
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
        mounted () {
        }
    };
</script>
