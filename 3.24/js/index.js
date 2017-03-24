/**
 * 
 * 
 */
console.log(this)

//事件处理函数
function clickHandle(str,tagIndex){
    console.group("click点击事件")
    console.log(tagIndex)
    console.log(str)
    // console.log(this)   //在js中 默认的this为window对象
    console.log(event)
    console.groupEnd('click点击事件')
}
var fifDiv = document.querySelector('.fif')

//此种方法调用会传递一个默认参数event
fifDiv.onclick = clickHandle     // 等价于clickHandle(event)
//再次为标签绑定事件   会覆盖数上一次的时间绑定效果  只有最后一次有效
//  xx.onclick = xxx   相当于为属性赋值  赋值之后属性被覆盖
fifDiv.onclick = function(e){
    console.log(e)
    alert('aaaaa')
}