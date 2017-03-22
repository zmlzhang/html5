for(var x =0; x<10;x++){
    var rc = document.createElement('div')
    var rs = Math.random()*300   //随机大小
    rc.style.width = rs + 'px'
    rc.style.height = rs + 'px'
    rc.style.borderRadius = '50%'
    rc.style.position = 'absolute'
    var ranTop = Math.random()*300
    var ranLeft = Math.random()*500
    rc.style.left = ranTop+'px'
    rc.style.top = ranLeft+'px'
    // 通过hsl设置随机颜色 0<= Math.random() < 1
    var ran = Math.floor(Math.random()*360)
    rc.style.backgroundColor= 'hsl('+ran+',50%,50%)'
    rc.innerText = x      //编号
    document.body.appendChild(rc)
}