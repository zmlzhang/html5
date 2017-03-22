// 获取文档的标题
console.log(document.title)

// 获取body节点返回的是一个对象   typeof获取类型
console.log(typeof document.body)

// innerHTML表示元素内部的html内容
console.log(typeof document.body.innerHTML)

//innerText  表示元素内部的文本内容，不包含html标签名字 
console.log(document.body.innerText)

// 通过设置innerHTML的值可以修改内部的内容
// document.body.innerHTML = '<h1>hellow world!</h1>'    重点

console.log(document.head)  //节点

console.log(document.scripts)   //所有的js引用集合(collection非数组)

console.log(document.styleSheets)  //获取样式表   获取页面中使用的样式（link  style）


// 
console.clear()    //清空上面控制台输出

// 根据id获取一个标签元素  如果找不到返回null
console.log(document.getElementById("txt")) 

//   根据标签名字查找元素
console.log(document.getElementsByTagName('p'))

// 根据class的值  获取多个返回一个jihe
console.log(document.getElementsByClassName('lis'))

// 根据name的值 获取多个元素 返回集合
console.log(document.getElementsByName('txtname'))
console.log('------querySelector------')
// querySelector  选择方式类似于css中的元素选择器
// 通过一个id获取一个标签
console.log(document.querySelector('#txt'))
// class和标签名字结合选择
console.log(document.querySelectorAll('.lis li'))
// 获取第三个里li的内容
console.log(document.querySelectorAll('.lis li')[2])

var lists = document.querySelectorAll('.lis li')
for(var i=0 ;i <lists.length;i++){
    var item = lists[i];   //临时变量保存循环到每一项
    console.log(item.innerText);
}

//获取页面文档中包含有指定属性的节点
var a = document.querySelectorAll('[name]')
// var a = document.querySelectorAll('[name="viewport"]')  //指定属性值   
console.log(a)