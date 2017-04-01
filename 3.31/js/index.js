//在js代码中书中的元素可以是不同类型
var arr = [1,2,3,4,5,'a',{name:'小米'}]     //数组

/**
 * .forEach小循环数组中的每一项内容
 * 在回调函数中接收三个参数
 *  参数一  数组再循环过程中的每一项
 *  参数二  当前循环到的对象的索引
 *  参数三  数组本身
 */
arr.forEach(function(item,index,a){
})

/**
 * 循环数组中的每一项内容  返回一个新的数组对象
 * 返回的新对象的长度和原数组一直，新数
 * 组对象中的内容是原数组中每次循环的返回值
 * 
 * 参数和forEach中一样
 */
var arr2 = [1,2,3,4,5]
 var arr3 = arr2.map(function(item,index,a){
     /**
      * Math.pow(a,b) 返回a的b次方
      */
     return Math.pow(item,3)
 })
 console.log(arr3)

/**
 * reduce  
 *    参数一   回调函数
 *      参数一     上一次返回值
 *      参数二     当前值
 *      参数三     索引
 *      参数四     原数组
 * 
 *    参数二   默认值
 */
 var sum = arr2.reduce(function(pre,cur,index,a){
     console.group('reduce' + index)
     console.log('pre:'+pre)
     console.log('cur:'+cur)
     console.log('index:'+index)
     console.log('arr:'+a)
     console.groupEnd('reduce')
     
     return  pre+cur     //返回sum值
 },9)
 console.log(sum)

/**
 * Array。prototype.sort  方法可以对数组进行排序操作
 *  如果不指定参数那么按照升序进行排列
 *  指定一个排序函数的时候  会对其进行有规律的排序操作
 */
var indexSort = 0
var arr4 = [1,2,4,67,8,9,5]
 console.log(arr2.sort())
 console.log(arr4.sort())
 arr4.sort(function(a,b){
     console.group('排序' + indexSort)
     console.log(arr4)
     console.log(a)
     console.log(b)
     console.groupEnd('排序' + indexSort)
     indexSort +=1
     return Number(a)-Number(b)
 })
 console.log(arr3)

 var people = [{
     name: 'Tom',
     age:18
 },{
     name:'Jerry',
     age:19
 },{
     name:'Kimi',
     age:8
 }]

 people.sort(function(p1,p2){
     return p2.age - p1.age
 })
 console.dir(people)

