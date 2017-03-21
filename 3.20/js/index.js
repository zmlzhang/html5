console.log("init page")    //输出一段话
//通过id查找页面中的标签元素
// #后面跟id值
var div=document.querySelector('#main')
var strHtml=''   //定义一个字符串

/*
    console.group(参数)
    console.groupEnd(参数)
    可以把输出内容做一个分组处理
    增加可读性


    console.clear()   清空终端输出
    console.info('')    输出消息内容（有消息图标）
    console.error()   输出错误消息（）有图标提示
    console.count('计数对象')    输出计数值
*/

for(var i=0;i<5;i++){
    console.group('我是第'+i+'次循环')
    console.log(i)    //输出i的值
    strHtml += '<h1>我是第'+i+'个h1</h1>'
    console.log(strHtml)
    console.groupEnd('我是第'+i+'次循环')
    console.count('for循环执行中。。。')
}
// 设置div的innerHTMl值为支付穿拼接结果
//innerHTML代表元素内部的html标签代码
div.innerHTML = strHtml
/*  
    浏览器断点添加删除方法（点击‘ 行号 ’即可）
    浏览器js调试快捷键
    f8   跳过断点继续执行
    f10  单步执行
    f11  进入方法体内部
*/