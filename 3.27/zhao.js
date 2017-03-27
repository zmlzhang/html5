var bu = document.getElementById('bu')
function hy(x,y,w,h){
    var div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.borderRadius = '50%'
    // var ran = Math.floor(Math.random()*360)
    div.style.border = '2px solid red'
    div.style.top = x + 'px'
    div.style.left = y + 'px'
    div.style.width = w + 'px'
    div.style.height = h + 'px'
    document.body.appendChild(div)
}

bu.onclick = function(event){
    var x = event.offsetX 
    var y = event.offsetY
    var cx = 0
    var cy = 0
    var cw = 0
    var ch = 0

  if (348 < x && x < 392 && y > 55 && y < 85) {
        // alert('1')
        cx = 348 +bu.offsetLeft
        cy = 55 + bu.offsetTop
        cw = 392 - 348
        ch = 85-55
        hy(cx,cy,cw,ch)
    }
    if (405 < x && x < 438 && 238 < y && y < 263) {
        // alert('2')
        cx = 405 +bu.offsetLeft
        cy = 238 + bu.offsetTop
        cw = 438 - 405
        ch = 263-238
         hy(cx,cy,cw,ch)
    }
    if (366 < x && x < 394 && 272 < y && y < 291) {
        // alert('3')
        cx = 366 +bu.offsetLeft
        cy = 394 + bu.offsetTop
        cw = 394-366
        ch = 291-272
        hy(cx,cy,cw,ch)
    }
    if (465 < x && x < 495 && 274 < y && y < 295) {
        // alert('4')
        cx = 465 +bu.offsetLeft
        cy = 274 + bu.offsetTop
        cw = 495-465
        ch = 295-274
        hy(cx,cy,cw,ch)
    }
    if (558 < x && x < 588 && 259 < y && y < 287) {
        cx = 558 +bu.offsetLeft
        cy = 259 + bu.offsetTop
        cw = 588-558
        ch = 287-259
        hy(cx,cy,cw,ch)
    }

}