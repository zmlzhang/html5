console.dir(localStorage)
localStorage.getItem('name')  //根据指定的key值获取对应的属性值
localStorage.clear()//清空localSotrage
localStorage.key(1)//获取指定位置的key值
localStorage.length //获取长度
localStorage.removeItem('name')//删除指定的key对应的值
//setItem 设置指定的key的value值，参数二为设置的值，必须是字符串
localStorage.setItem('name',{name:'123'})
/**
 * localStorage  sessionStorage
 * 相同点：浏览器本地存储·存储方式的键值对的形式，只能存字符串，最大长度不超过5M
 * 不同点：存储周期时间不同，localStorage永久存在 除非手动清楚
 *          sessionStorage只能在当前会话状态，当前浏览器窗口关闭之后重新打开就消失了
 */

var obj = {}
obj.name = 'TOm'
obj.age = 27
// Object.defineProperty(obj,'britthday',{
//     get:fuction(){
//         return `${this.name}的出生年份`
//     }
// })
Object.defineProperty(obj,'birthday',{
    get:function(){//当获取对象的brithday的时候会调用get方法
        console.log('get方法被调用')
        return `${this.name}的出生年份为${new Data().getFullYear()-18}`
    },
    set:function(val){//设置值的时候被调用
        console.log('set方法被调用')
        console.log(val)
        this.birthYear = val
    }
})
obj.birthday = '1995' //此处调用set 进行赋值操作
console.dir(obj)
console.log(obj.brithday)

