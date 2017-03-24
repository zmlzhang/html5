var main = document.getElementsByClassName('main')

//以下属性为只读 不可修改
console.log(main.clientHeight)    //内容区域  包含padding
console.log(main.offsetHeight)    // 内容区域外加biankuang
console.log(main.clientTop)       // 距离顶部的位移，偏移量 y轴方向（内容区域的位移顶部的部分）
console.log(main.offsetTop)       // 距离顶部的距离 margin 

/**
 * 一屏幕左上角为参考点 坐标（0,0） 坐标中，参数一表示x轴  参数二表示y轴
 */


console.log('-------')
console.log(main.clientWidth)    //padding
console.log(main.offsetWidth)    //padding + border
console.log(main.clientLeft)     //边框
console.log(main.offsetLeft)     //(屏幕尺寸 -326)/2

document.body.clientHeight   //高
document.body.clientWidth    //宽

var divBl = document.createElement('div')    //创建一个div
divBl.style.backgroundColor = '#00f'
divBl.style.width= '300px'
divBl.style.height = '300px'
divBl.style.position = 'absolute'      //位置  定位方式
divBl.style.left = '0'                 // 左   如果数字是0可以不写单位，否则需要加单位
divBl.style.bottom = '0'               // 底部
document.body.appendChild(divBl)       //插入到页面底部

// divBl.onclick = function(){
//     divBl.style.left = divBl.offsetLeft + 5 + 'px'
// }

// setInterval(function(){
//      divBl.style.left = divBl.offsetLeft + 1 + 'px'
// },1000)        //根据指定的手机间隔移动div
var directX = 1
function move(){
    //  divBl.style.left = divBl.offsetLeft + 1 + 'px'
     var w = document.body.clientWidth
     var cellW = divBl.offsetWidth
     if(divBl.offsetLeft + cellW >= w){
         console.log('已经一定到结尾位置')
         directX = -1     //移动到屏幕左右边的时候   反向
     }
     if(divBl.offsetLeft <= 0){
         directX = 1      //移动到屏幕左右边的时候 调转方向
     }
     divBl.style.left = divBl.offsetLeft + directX*1 + 'px'
    //  else{
    //       divBl.style.left = divBl.offsetLeft + 1 + 'px'
    //  }
     //每秒执行60次
     requestAnimationFrame(move)  //使用js的动画帧   调用自身移动的方法    
     
}
move()


/**
 * var a ="2"
 * var b= 2
 * a+b    //22
 * 
 * 把字符串转换成数字的方法
 * 1. a*1
 * 2. Number(a)
 */