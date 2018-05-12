# message
----
### 基础用法


<Button @click="message">message dialog</Button>

::: demo
```html
<Button @click="message">message dialog</Button>

<script>
  export default {
      message () {
        return this.$dialog.msg({
              msg: 'this is a message dialog',
              icon:'ios-checkmark',
              iconcolor:'#19be6b'
          })
      },
    
  }
</script>
```

:::


