# dialog
----
### 基础用法

属性来定义 Button 的样式。

:::warning 
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
:::

<div>
  <Button @click="alert">confim</Button>
  <Button @click="alerta">无标题无取消</Button>
  <Button @click="alertb">无取消</Button>
</div>

::: demo
```html
<div>
  <Button @click="alert">confim</Button>
  <Button @click="alerta">无标题无取消</Button>
  <Button @click="alertb">无取消</Button>
</div>
<script>
    export default {
        methods: {
            alert(){
                this.$dialog.Dialog.confirm({
                    title:'提示' ,
                    message:'成功111',
                    confirmButtonText:'OK'
                }).then(() => {
                    // on confirm
                    console.log('ok')
                }).catch(() => {
                    // on cancel
                    console.log('cancel')
                });
            },
            alerta(){
                this.$dialog.Dialog.confirm({
                    title:'提示' ,
                    message:'成功',
                    confirmButtonText:'OK'
                }).then(() => {
                    // on confirm
                    console.log('ok')
                }).catch(() => {
                    // on cancel
                    console.log('cancel')
                });
            },
            alertb(){
                this.$dialog.Dialog.confirm({
                    title:'提示' ,
                    message:'成功',
                    confirmButtonText:'OK'
                }).then(() => {
                    // on confirm
                    console.log('ok')
                }).catch(() => {
                    // on cancel
                    console.log('cancel')
                });
            }
        }
    }
</script>
```

:::

