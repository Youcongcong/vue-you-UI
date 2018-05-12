# Radio
----
### 基础用法

<div>
        <Radio size="large" label="large"></Radio>
        <Radio label="default"></Radio>
        <Radio size="small" label="small"></Radio>
        <div/>
       <br/>
       <div class="animated-background"></div>
        <Radio-group v-model="button2" type="tab" @on-change="test()">
            <Radio label="北京"></Radio>
            <Radio label="上海"></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="苏州"></Radio>
            <Radio label="杭州"></Radio>    选中值：{{button2}}
        </Radio-group>
        <div/>
        <br/>
        <Radio-group v-model="phone">
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </Radio-group>
</div>


::: demo
```html
<div>
        <Radio size="large" label="large"></Radio>
        <Radio label="default"></Radio>
        <Radio size="small" label="small"></Radio>
        <div/>
       <br/>
       <div class="animated-background"></div>
        <Radio-group v-model="button2" type="tab" @on-change="test()">
            <Radio label="北京"></Radio>
            <Radio label="上海"></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="苏州"></Radio>
            <Radio label="杭州"></Radio>    选中值：{{button2}}
        </Radio-group>
        <div/>
        <br/>
        <Radio-group v-model="phone">
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </Radio-group>
</div>
<script>
    export default {
        data(){
            return{
                button2:'北京',
                phone:''
            }
        },
        methods:{
            test(){
                console.log(this.button2)
            }
        }
    }
</script>
```

:::