/**
 * event.target  //触发事件的对象(标签)
 * event.currentTarget  //表示绑定事件的对象(标签)
 *
 */
function ul(event){
    console.group('click----')
    console.log(event.target)
    console.log(event.currentTarget)
    console.groupEnd('click----')
}

function btn(event){
    console.group('btn click----')
    console.log(event.target)
    console.log(event.currentTarget)
    console.groupEnd('btn click----')
}

var arrh = document.querySelectorAll('h1')
for(var i=0;i<arrh.length;i++){
    arrh[i].dataset['index'] = i
    arrh[i].onclick = function(e){
        console.log(e.currentTarget.dataset.index)   //
    }
}

/**
 * 循环中的doPuts方法在其循环内部调用的时候
 * 每一次调用生成一个独立的作用域空间，在此作用域内部变量的值是独立的
 * 此种在function内部生成独立作用域空间的行为为闭包
 * js能把函数（function）当做参数进行传递是生成闭包的前提
 */
for(var i=0;i<10;i++){
    // function doPuts(i){
    //     setTimeout(function() {
    //         console.log(i)
    //     }, 1000);
    // }
    // doPuts(i)

     setTimeout(function() {
            // console.log(i)
        }, 1000);
}

/**
 * 在demo中有一个返回值为一个function对象
 */
function demo(val){
    var k =18
    if(val){   //判断传递的参数是否存在  如果存在设置 k=val
        k = val
    }
    function demoA(val){//定义一个function
        return k
    }
    return demoA       //函数返回值为我们定义的function demoA
}
console.log(demo()())
console.log(demo(21)())
console.log(demo(21)(19))


// (function(val){
//     if(val){
//         val++
//     }
//     function k(){
//         console.log(val++)
//         console.log(val)
//     }
//     return k
// })(18)()


var arr1 = []
var  arr = [1,2,4,5,6,9,8,7,5,1,2,6,5,4,23,54,]
for(var i =0;i<arr.length;i++){
    var x = arr[i]
    if( x%2 ==0){
    arr1.push(x)
    }
}
console.log(arr1)

//去重
var arr2 = []
for(var i=0;i<arr.length;i++){
    //indexOf  获取指定的值在数组中的索引，如果不存在则返回-1
    if(arr2.indexOf(arr[i])<0){
        arr2.push(arr[i])
    }
}
console.log(arr2)