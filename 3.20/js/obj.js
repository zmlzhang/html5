var person = {}

person.name = 'tom'
person['age'] = 18   //赋值一个属性age，通过[]方式
person.pets = []  //pets 宠物的集合

var petCat = {} //宠物猫
petCat.name = 'kitty'
petCat.fav = '鱼'
petCat.type = 'cat'

var petdog = {}
petdog.name = '小白'
petdog.fav= '棉花糖'
petdog.type = 'dog'

person.pets.push(petCat)
person.pets.push(petdog)

// 以树形结构的方式输出指定内容
console.dir(person)

/*
    object对象中的属性值可以为任意的数据（对象 ，数组等）
    属性名字的设置的时候可以使用类似数组下标的方式
    object对象是一个键值对（key-value）的形式
    获取对象的key值
*/
// 通过for in 方法获取对象的键（key）
for(var k in person){
    console.log(k)
    // console.log(person[k])
}

// 通过Object.keys(对象) 获取key 的值
console.log(Object.keys(person))


/**
 * setTimeout 延迟执行一个方法
 * 参数一  回调函数
 * 参数二  延迟时间（毫秒单位）
 */
// setTimeout(function() {
//     console.log('5秒钟已经过去了')
// },5000);
// console.log('程序执行完成')

                            
function log(k){
    setTimeout(function (){
        console.log(k)
    },5000)
}
function loop(){
    console.time('之行开始 ')
    for( var i=0 ;i<5;i++){
        // setTimeout(function (){
        //     console.log(i)
        // },5000)
        console.log(i)
    }
}
loop();



(function (){
    console.log('我是一个匿名函数')
})()


/**
 * 间隔指定的时间之后触发一个回调函数 循环执行
 * 参数一  回调函数
 * 参数二  时间间隔  毫秒
 */
var timer=setInterval(function(){
    console.log('----')
},1000)

setTimeout(function(){
    clearInterval(timer)  //清除计时器
},5000)