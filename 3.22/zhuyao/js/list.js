var div= document.createElement('div')
div.style.width = '500px'
div.style.height = '300px'
// rgba 设置颜色的时候取值范围为0~255
// a的值表示透明度从0~1
div.style.backgroundColor = 'rgba(85,0,0,0.8)'   //通过rgba设置yanse
document.body.appendChild(div)

var h1 =  document.createElement('h1')
h1.innerText = '我是一个h1标签'
h1.style.color = 'white'
// 把h1标签插入到div容器内部
div.appendChild(h1)

var h3 =  document.createElement('h3')
h3.innerText = '我是一个h3标签'
h3.style.color = 'green'
div.insertBefore(h3,h1)  // 把h3插入到页面中

div.appendChild(h3)   //在div中再次插入h3 h3出现在h1的后面，而且只出现一次

var h5 = document.createElement('h5')
h5.innerText = '我收一个h5标签'
h5.style.color = 'blue'
div.insertBefore(h5,h3)   //在h3之前插入一个h5

console.log(h5.parentNode)   //获取指定标签的父节点
console.log(div.lastChild)   //获取指定标签的结尾子节点
console.log(div.firstChild)  //获取指定标签的第一个子节点

/**
 * 在指定标签的后面加入一个元素
 *  newchild   参数一     新加入的标签
 *  refChild   参数二     需要加入的标签的位置（参考物）
 */
function insertAfter(newchild,refChild){
    var parentContainer = refChild.parentNode    //获取父容器
    var  next= refChild.nextElementSibling   //获取参考物的下一个节点
    if(next){
        // 在下一个节点的上一个位置加入
        parentContainer.insertBefore(newchild,next)
    }
    else{
        // 如果当前是结尾节点
        parentContainer.appendChild(newchild)
    }
}
var span = document.createElement('span')
span.innerText = '我是一个span，用该bei插入到h3的后面'
insertAfter(span,h3)
var b = document.createElement('b')
b.innerText = '我是一个b标签，应该被插入到h5表现的后面'
insertAfter(b,h5)

console.clear()
// 通过div.childNodes  可以获取所有的子节点（标签）
console.dir(typeof div.childNodes)
console.log(typeof div.children)
// 删除子节点
div.removeChild(span)
// div.remove()     //删除节点