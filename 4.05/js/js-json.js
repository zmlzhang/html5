var p = {}
p.name = 'Tom'
p.age = 17
p.nickNmae = 'Ender'
p.skills = [{
    name:'play games',
    desc:'专业级选手'
},{
    name:'study',
    desc:'业余'
}]
console.dir(p)//输出一个对象
var strjson = JSON.stringify(p)    //通过JSON.stringify方法把一个js对象转化为一个字符串
console.dir(strjson)    //字符串

document.body.innerHTML += p +'<br><br>'
document.body.innerHTML += strjson
console.log(typeof p)
console.log(typeof strjson)

var person = JSON.parse(strjson)
console.dir(person)
console.log(typeof person)

/**
 * localStorage  本地浏览器存储数据的方式
 *    存储周期为永久 除非用户手动删除
 *    存储大小为5m以内
 *    只能存储字符串
 * sessionStorage 本地存储数据的方式 随着当前会话结束（窗口关闭）而消失
 */

// localStorage
// sessionStorage

