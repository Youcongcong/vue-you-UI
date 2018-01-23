import Vue from 'vue'

//判断参数是否其中一个
export function $oneOf(value,validList){
    if(validList.includes(value)){
        return true
    }else{
        return false
    }
}