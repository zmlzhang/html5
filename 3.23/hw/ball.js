//定义一个小球
var ball = document.createElement('div')      //定义标签
ball.style.position = 'absolute'              //定位方式
ball.style.left ='20px'                       //left
ball.style.top = '30px'                        // right
ball.style.borderRadius = '50%'               // 圆角
ball.style.width = '120px'                    // 宽
ball.style.height = '120px'
ball.style.backgroundColor = 'blue'
document.body.appendChild(ball)


var directX = 1
var directY = 1
var w = document.body.clientWidth       //宽
var h = document.body.clientHeight      //高

function move(){
    if(ball.offsetLeft + ball.offsetWidth >= w){      //移动到右边改变方向
        directX = -1
    }
    if(ball.offsetLeft <= 0){                         //移动到左边改变方向
        directX = 1
    }
    if(ball.offsetTop + ball.offsetHeight >=h){       //移动到底部改变方向
        directY = -1
    }
    if(ball.offsetTop <= 0){                          //移动到顶部改变方向
        directY = 1
    }
    ball.style.top = ball.offsetTop + directY*2 +  'px'
    ball.style.left = ball.offsetLeft + directX*4 + 'px'
    requestAnimationFrame(move)   //动画帧调用
}
move()

//onresize  重置窗口的大小
window.onresize = function(){        //改变窗口大小的时候  重置w和h的值
    w = document.body.clientWidth
    h = document.body.clientHeight
}