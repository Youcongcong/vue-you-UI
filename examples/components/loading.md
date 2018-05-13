
# Loading
----
### 基础用法


<Loading v-show="showloading">登录中...</Loading>

::: demo
```html
<Loading v-show="showloading">登录中...</Loading>

<script>
  export default {
        data() {
            return {
                showloading:true
            }
        },
        mounted(){
            let that = this
            setTimeout(function(){
                that.showloading = false
            },2000)
        }
    }
</script>
```

:::


