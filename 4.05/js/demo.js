var strA = 'Hello Tom'
var strB = strA
console.log(strA)
console.log(strB)
strB = 'Hello Jerry'
console.log('----对strB赋值之后重新输出')
console.log(strA)   //hello Tom 
console.log(strB)   //hello Jerry

console.clear()

/**
 * 对象指向的是内存空间中的一个地址
 * 在js中可以把对象理解为引用类型，引用的是一个内存空间地址
 * 我们把一个变量的值指定为一个对象的时候，实际上是把内存地址赋值给了变量
 * 当修改对象的值时，修改的是内存中的值，地址指向不变。
 * 所以当修改变量对象的值之后，所以指向此地址位置的内容都会改变
 */
var objA = { name: 'Tom' }    //在内存中开辟一块存储空间用于存值（例如：0X134775）
var objB = objA    //是把变量objB的地址指向objA的位置
console.dir(objA)
console.dir(objB)
objB.name = 'Jerry'
console.log('----对objB赋值之后重新输出')
console.log(objA)
console.log(objB)

console.clear()
var objC = { name: 'Jerry' }
var objD = Object.create(objC)   //通过Object.create 使用制度的对象创建一个新的对象
console.dir(objC)
console.dir(objD)
objD.name = 'Mickey'
console.log('----对objD赋值之后重新输出')
console.log(objC)
console.log(objD)

var strUal = "http://www.baidu.com?name=tom&age=19&key=美剧天堂&val=27&u=kk"
function getParams(url) {
    var result = {}

    //字符串处理
    var arrf = url.split('?')[1].split('&')
    arrf.forEach(function (item) {
        var params = item.split('=')   //通过=进行分割
        result[params[0]] = params[1]  //对象赋值
    })

    return result
}
console.dir(getParams(strUal))
console.clear()

function p(name, age, fav) {
    var str = '<div style = "border:1px solid red;margin:3px;">'
        + '我的名字是' + name + '<br/>' + '我今年' + age + '<br/>'
        + '我最喜欢的' + fav + '<br/>' + '</div>'
    return str
}
document.body.innerHTML += p('tom', 18, 'cat')
document.body.innerHTML += p('jerry', 18, 'dog')
document.body.innerHTML += p('Dohkyungsoo', 25, 'mouse')
function t() {
    var str = '<div style = "border:1px solid red;margin:3px;">'
        + '我的名字是' + name + '<br/>' + '我今年' + age + '<br/>'
        + '我最喜欢的' + fav + '<br/>' + '</div>'
    return str
}
document.body.innerHTML += t({ age: 25, name: '都暻秀', fav: '武岩岩' })





