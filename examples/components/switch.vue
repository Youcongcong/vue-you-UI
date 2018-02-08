<template>
    <div>
        <y-switch v-model="m1" trueValue="yes" falseValue="false">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </y-switch>
        {{ m1 }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                m1: 'yes'
            }
        },
        methods: {
            change (status) {
                console.log(status)
            }
        }
    }
</script>
