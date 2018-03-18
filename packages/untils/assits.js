import Vue from 'vue'

//判断参数是否其中一个
export function $oneOf(value,validList){
    if(validList.includes(value)){
        return true
    }else{
        return false
    }
}

//在子组件通过父组件的name找多对应的组件 并返回

export function findComponent(childThis,componentName){
    if(typeof componentName === "string"){
        componentName = [componentName]
    }
    let parent = childThis.$parent;
    let name = parent.$options.name;
    while(parent && (componentName.indexOf(name)<0)){
        parent = parent.$parent;
        if(parent) name = parent.$options.name;
    }        
    return parent;
}

//向下找对应的组件
export function findComponentsDownward (context, componentName) {
    return context.$children.reduce((components, child) => {
        if (child.$options.name === componentName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}
