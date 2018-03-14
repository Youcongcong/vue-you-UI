<template>
    <i :class="classes" :style="styles">
    </i>
</template>

<script>
    const preCls = 'yui-icon';
    export default {
        name: 'Icon',
        props: {
            type: String,  //icon className
            size: [Number, String],
            color: String
        },
        computed: {
            classes() {
                return `${preCls} ${preCls}-${this.type}`;
            },
            styles() {
                let style = {}
                if (this.size) {
                    style['font-size'] = `${this.size}px`
                }
                if (this.color) {
                    style.color = this.color
                }
                return style
            }
        }
    }
</script>