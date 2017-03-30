var div = document.querySelector('.con')
div.onclick = function(e){
    console.log(e)
}
div.onclick = null    //通过设置onclick的属性为空可以删除通过click赋值的事件

var divclick = function(e){
    console.log('通过addEventListener 添加事件')
    console.log(e)
}
div.addEventListener('click',divclick)
//为按钮添加事件
/**
 * removeEventListener  删除对指定标签对象的事件监听
 * 参数一       事件类型
 * 参数二       事件处理函数
 * 参数三       (可选 true/false)  是否捕获阶段
 */
function btn(){
    console.log('移除多div')
    div.removeEventListener('click',divclick)
}


//创建一个keyBoardEvent
var keyevn = new KeyboardEvent('keyup',{
    key: 'k'
})
//事件一定要先监听在派发
//派发键盘事件的按钮点击之后
function btndis(){
    div.dispatchEvent(keyevn)
}
//为div添加一个keyup事件
function up(){
    div.innerText += e.key
}