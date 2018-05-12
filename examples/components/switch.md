
# switch
----
### 基础用法

<div>
    <y-switch v-model="m1" trueValue="yes" falseValue="false">
        <span slot="open">开</span>
        <span slot="close">关</span>
    </y-switch>
    {{ m1 }}
       
</div>

::: demo
```html
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
        data() {
            return {
                m1: 'yes',
                title: '',
                
            }
        },
        methods: {
            change(status) {
                console.log(status)
            },
    
        },
        mounted() {
            
        }
    }
</script>
```

:::

