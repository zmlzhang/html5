//根据属性名字进行选择
var div = document.querySelector('[data-title]')
console.log(div.dataset['title'])
console.log(div.dataset.title)

//鼠标事件
// div.onclick = function(event){
// }

//顺序  down -> press -> up
//键盘抬起事件
document.body.onkeyup = function(e){
    console.log('keyup')
    //toUpperCase   转换大小写
    if(e.key.toUpperCase() == "M" && e.ctrlKey){
        alert('输入内容正确')
    }
    else{
        alert("请重新输入内容")
    }
    // console.log(e)
    // e.key       //按下的键值  按下的按键是什么
    // e.altKey   // true/false 是否按下alt键
    // e.ctrlKey  // true/false 是否按下ctrl
    // e.shiftKey // true/false  是否按下shift
    // e.keyCode  // 按键对应的编码
}

//按键按下事件
// document.body.onkeydown= function(e){
//     console.log('keydown')
//     console.log(e)
// }

//按键点击事件
// document.body.onkeypress = function(e){
//     console.log('keypress')
//     console.log(e)
// }