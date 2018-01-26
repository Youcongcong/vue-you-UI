

var addEvent = (function () {
    if (window.addEventListener) {
        return function (elm, type, handle) {
            elm.addEventListener(type, handle, false)
        }
    }
    if (window.attachEvent) {
        return function (elm, type, handle) {
            elm.attachEvent('on' + type, handle)
        }
    }
})()
var bindScrollAction = function (elm, Tophandle , Bothandle) {
    var args = Array.prototype.splice.call(arguments,3);
    addEvent(elm,'touchmove',function(){
        var scrollHeight = elm.scrollHeight;
        var scrollTop    = elm.scrollTop;
        var height       = elm.offsetHeight;
        
        //滚动到底部
        if((scrollTop + height) == scrollHeight){
            console.log(scrollHeight,'scrollHeight')
            console.log(scrollTop,'scrollTop')
            console.log(height,'height')
            if(typeof Bothandle === 'function' && Bothandle != undefined) Bothandle.apply(this, args);
        }
        //滚动到头部
        if(scrollTop == 0){
            console.log(height,'height')
            console.log(scrollHeight,'scrollHeight')
            console.log(scrollTop,'scrollTop')
            if(typeof Tophandle === 'function' && Tophandle != undefined) Tophandle.apply(this, args);
            
        }
        

    })
}
export default bindScrollAction