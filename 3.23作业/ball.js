var w = document.body.clientWidth
var h = document.body.clientHeight
//定义一个数组   存放很多个随机大小的球
var arrball = []
//创建20个球
for (var i = 0; i < 5; i++) {
    var ball = document.createElement('div')
    ball.style.borderRadius = '50%'
    ball.style.position = 'absolute'

    //方向
    ball.dataset['directX'] = 1
    ball.dataset['directY'] = 1

    // 随机位置
    ball.style.left = Math.random() * (w - wid + 60) + 'px' //left
    ball.style.top = Math.random() * (h - wid + 60) + 'px'

    // 随机大小
    var wid = Math.floor(Math.random() * 60 +40)
    ball.style.width = wid + 'px'
    ball.style.height = wid + 'px'

    //随机颜色
    var randomColor = Math.floor(Math.random() * 360)
    ball.style.backgroundColor = 'hsl(' + randomColor + ',70%,60%)'
    // var bj = document.querySelector('body')
    // bj.style.backgroundColor = 'hsl(' + randomColor + ',70%,60%)'
    // 插入到body
    document.body.appendChild(ball)
    arrball.push(ball)
}


//转动函数
function move() {
    for (var i = 0; i < arrball.length; i++) {
        var ball = arrball[i]
        function b() {
            var wid = Math.floor(Math.random() * 60 + 40)
            ball.style.width = wid + 'px'
            ball.style.height = wid + 'px'
            var randomColor = Math.floor(Math.random() * 360)
            ball.style.backgroundColor = 'hsl(' + randomColor + ',70%,60%)'
            
        }
        // bj.style.backgroundColor = 'hsl(' + randomColor + ',70%,60%)'
        if (ball.offsetLeft + ball.offsetWidth >= w) {
            ball.dataset['directX'] = -1
            b()
        }
        if (ball.offsetLeft <= 0) {
            ball.dataset['directX'] = 1  //移动到屏幕最左边的时候 调转方向
            b()
        }
        if (ball.offsetTop + ball.offsetHeight >= h) { //移动到底部 改变方向
            ball.dataset['directY'] = -1
            b()
        }
        if (ball.offsetTop <= 0) { //移动到顶部 改变方向
            ball.dataset['directY'] = 1
            b()
        }

        //随机速度
        var q = Math.floor(Math.random() * 10)
        var p = Math.floor(Math.random() * 10)
        ball.style.left = ball.offsetLeft + ball.dataset['directX'] * p + 'px'
        ball.style.top = ball.offsetTop + ball.dataset['directY'] * q + 'px'
    }
    requestAnimationFrame(move)//动画帧调用
}
move()

//重置窗口大小事件
window.onresize = function () { //改变窗口大小之后 重置w和h的值
    w = document.body.clientWidth
    h = document.body.clientHeight
}
