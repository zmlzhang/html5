var person = {}

if(person){
    console.log('1111')
}
else{
    console.log('2222')
}

person.name = '小明'
person['age'] = 18
person.skill = ['吃饭','睡觉']

/**
 * 通过object.defineProperty 定义一个属性信息
 *  参数一    需要定义属性的对象
 *  参数二    属性名字
 *  参数三    属性的描述信息
 */
Object.defineProperty(person,'gender',{
    value:'男',
    enumerable:true,    //是否可枚举默认为false表示不允许获取key的值
    writable:true,      //是否可写，默认为false
    configurable:true,  //是否可配置，默认为false 当执行delete操作时 返回false  不可删除 
}) 
console.dir(person)

//通过for枚举每一个属性名字
for(var k in person){
    console.log(k)
}

person.name = 'tom'
person.gender = 'nv'

// delete person.age
// delete person.gender
console.dir(person)

Object.defineProperty(person,'name',{
    enumerable:false  
})
console.dir(Object.keys(person))  //通过Object.keys获取所有属性的名字
//Object.getOwnPropertyDescriptor 获取指定属性的描述信息
Object.getOwnPropertyDescriptor(person,'name')

console.log(Object.isExtensible(person))   //是否扩展   true
Object.preventExtensions(person)   //禁用扩展
console.log(Object.isExtensible(person))    //是否扩展   false
person.brithdy = '1992-3-30'
console.log(delete person.age)  // true 可以删除
person.age = 19 //不能进行设置新属性
console.log(person)


console.clear()
var animal = {
    name:'Jerry',
    age:19,
    type:'mouse'
}
animal.speak = function(){
    console.log(this)
    return this.name
}
console.log(animal.speak())
/**
 * 通过Object.seal()方法可以吧对象进行密封操作
 * 操作之后的对象不能新增或者删除属性，但是已有的属性可以进行修改
 * 
 * 
 * 通过Object.freeze()方法在seal的基础之上  禁用修改操作
 */
// Object.seal(animal)     //密封
Object.freeze(animal)
console.log(delete animal.age)    //删除对象的age信息
console.dir(Object.getOwnPropertyDescriptor(animal,'name'))     //获取对象的name属性的描述信息
animal.name = 'Mickey'
animal.gender = 'boy'
console.log(Object.isExtensible(animal))   //是否可扩展
console.log(Object.isSealed(animal))     //是否被密封操作
console.log(Object.isFrozen(animal))     //是否被冻结
console.dir(animal)