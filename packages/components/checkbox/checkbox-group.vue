<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
    import {$oneOf,findComponentsDownward} from '../../untils/assits.js'
    export default{
        name:'CheckboxGroup',
        data(){
            return{
                childrens:null,
                currentValue:this.value
            }
        },
        props:{
            value:{
                type:Array,
                default:null
            }
        },
        methods:{
            update(){
                this.childrens = findComponentsDownward(this,'Checkbox')
                if(this.childrens){
                    const value = this.value;
                    this.childrens.forEach(item =>{
                         item.model = value;
                         item.currentValue = value.indexOf(item.label) >= 0;
                         item.group = true;
                    })
                }
            },
             change (data) {
                this.currentValue = data;
                this.$emit('input', data);
                this.$emit('on-change', data);
            }
        },
        mounted(){  
            this.update()
        },
        watch: {
            value () {
                this.update();
            }
        }

    }
</script>