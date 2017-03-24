var body = document.body
body.onclick = function(b){
    var div = document.createElement('div')
    var dx = Math.floor(Math.random()*100+30)
    div.style.width = dx + 'px'
    div.style.height = dx + 'px'
    var ran = Math.floor(Math.random()*360)
    div.style.backgroundColor = 'hsl('+ran+',60%,70%)'
    div.style.position = 'absolute'
    div.style.left = b.pageX-dx/2 + 'px'
    div.style.top = b.pageY-dx/2+ 'px'
    div.style.borderRadius = '50%'
    body.appendChild(div)
}