var s = document.querySelector('section')
var m = document.querySelector('main')
var d = document.querySelector('div')
var h = document.querySelector('h1')

/**
 * 通过addEventListener 添加时间时传递三个参数
 * 参数一    事件类型
 * 参数二    事件处理函数
 * 参数三    捕获阶段是否触发（可选参数）
 * 事件传递分两个流程
 * 捕获（挖洞）阶段和冒泡阶段
 * 多个叠加的容器添加click事件之后
 *        捕获阶段的事件会从容器的最外层开始逐级触发
 *        到达当前触发事件的标签之后开始执行冒泡事件，从内往外逐级触发
 * 
 * 
 * 
 *通过onclick注册（添加）的事件在冒泡阶段被触发之前
  如果存在有通过addEventListener添加的事件冒泡阶段的事件
  那么事件执行的顺序和我注册（添加）的先后顺序欧冠
 */

s.addEventListener('click',function(params){
    console.log(params)
    console.log('section clicked   --  捕获阶段')
}                                                                                                                                                                                  )
s.addEventListener('click',function(p){
    console.log(p)
    console.log('section clicked   --  冒泡阶段')
})
s.onclick = function(e){
    console.log(e)
    console.log('section clicked by onclick function')
}
m.addEventListener('click',function(p){
    console.log(p)
    console.log('main clicked')
    p.stopPropagation()        //停止事件
    p.stopImmediatePropagation()     //立即停止
},true)
d.addEventListener('click',function(p){
    console.log(p)
    console.log('div clicked')
})
h.addEventListener('click',function(p){
    console.log(p)
    console.log('h1 clicked')
})