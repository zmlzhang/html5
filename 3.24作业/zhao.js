var body = document.body
function clicked(event) {
    console.group('图片被点击')
    //当前点击位置距离当前对象左上角的偏移量
    console.log('x:' + event.offsetX)
    console.log('y:' + event.offsetY)
    var x = event.offsetX
    var y = event.offsetY


    if (348 < x && x < 392 && y > 55 && y < 85) {
        alert('1')
        hy(348, 55)
    }
    if (405 < x && x < 438 && 238 < y && y < 263) {
         alert('2')
        hy(405,238)
    }
    if (366 < x && x < 394 && 272 < y && y < 291) {
        hy()
    }
    if (465 < x && x < 495 && 274 < y && y < 295) {
        hy()
    }
    if (558 < x && x < 588 && 259 < y && y < 287) {
        hy()
    }
    console.groupEnd('图片点击')
} 


    function hy(x, y) {
    var div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    // div.style.borderRadius='50%'
    div.style.border = '2px solid pink'
    div.style.position = 'absolute'
    div.style.left = x+ 'px'//设置出现的位置
    div.style.top = y+ 'px'
    document.body.appendChild(div)

        var div = document.createElement('div')
        var dx = Math.floor(Math.random() * 20 + 10)
        div.style.width = dx + 'px'
        div.style.height = dx + 'px'
    
        div.style.backgroundColor = 'hsl(' + ran + ',60%,70%)'
        div.style.position = 'absolute'
        div.style.left = x + 'px'
        div.style.top = y + 'px'
        div.style.border='1px solid red'
        div.style.left = yuan.pageX - dx / 2 + 'px'
        div.style.top = yuan.pageY - dx / 2 + 'px'
        div.style.borderRadius = '50%'
       
        document.body.appendChild(div)
    }






