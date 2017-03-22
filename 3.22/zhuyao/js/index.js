var  strDiv = '<div style= width:200px;height:100px;background-color:red;"></div>'
// document.body.innerHTML = strDiv
/**
 * innerHTML  把HTML代码解析之后再显示页面
 * innerText  直接把html代码的源码内容以文本的形式显示出来
 */

var divBlue ='<div style= width:200px;height:100px;background-color:blue;"></div>'
// document.body.innerHTML += divBlue
// document.body.innerText = strDiv + divBlue

// 以上是拼接字符创的方式


// 通过document.createElement 创建一个html标签对象，参数值为标签名字
var rect = document.createElement('div')
console.dir(rect)
rect.style.backgroundColor = '#0f0'
rect.style.width = '200px'
rect.style.height = '100px'
document.body.appendChild(rect)


var yuan  = document.createElement('div')
yuan.style.backgroundColor = 'orange'
yuan.style.width = '200px'
yuan.style.height = '200px'
yuan.style.borderRadius = '50%'
document.body.appendChild(yuan)


// for(var i =0 ;i<10 ;i++){
//     var yuan  = document.createElement('div')
//     // var j = Math.ceil(Math.random()*360)
//     yuan.style.backgroundColor = 'hsl(j,1/2,1/2)'
//     yuan.style.width = '200px'
//     yuan.style.height = '200px'
//     yuan.style.borderRadius = '50%'
//     document.body.appendChild(yuan)
// }