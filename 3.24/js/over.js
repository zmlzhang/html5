//鼠标over事件
function over(e, tag) {
    console.log(e)
    console.log(tag)
    tag.style.backgroundColor = 'hsl(136,60%,70%)'
}
//鼠标离开事件
function out(e, tag) {
    tag.style.backgroundColor = 'red'
    isDown = false
}
var isDown = false
var downX = 0    //记录鼠标点下的位置
var downY = 0
//鼠标按下事件
function down(e, tag) {
    isDown = true
    downX = e.offsetX
    downY = e.offsetY
}
//鼠标抬起
function up(e, tag) {
    isDown = false
}
//鼠标移动
function move(e, tag) {
    // console.log('offsetX:' + e.offsetX)
    // console.log('paegX:' + e.pageX)
    // console.log('clientX:' + e.clientX)
    if (isDown){
        // tag.style.left = (e.pageX - e.offsetX) + 'px'
        tag.style.left = e.pageX - downX + 'px'
        tag.style.top = e.pageY - downY + 'px'
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            