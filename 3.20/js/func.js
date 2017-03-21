/**
 * js是单线程的
 * 
 */
function fun(msg){
    // alert('mmmm')
    console.log(msg)
}
fun('我是一段信息')
var funFor= function(par){
    console.log(par)
}
console.log(funFor)

funFor('我还是一个方法')