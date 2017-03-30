//创建一个自定义事件
//在创建自定义事件的时候使用detail属性传递参数
var my = new CustomEvent('m',{
    detail:{
        name: 'tom',
        age:18
    }
})

//为div添加自定义事件的监听
var div = document.querySelector('.con')
div.addEventListener('m',function(e){
    console.log('my被触发了')
    console.log(e)
})
//自定义事件主要用于数据传递
//点击按钮之后派发自定义事件
function btn(){
    div.dispatchEvent(my)
}


function timer(){
    var i = 0
    var t = setInterval(function(){
        i++
        if(i==10){
            clearInterval(t)
        }
    },1000)
}
timer()