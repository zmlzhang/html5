//获取页面中的a标签 
var arrAdlinks = document.getElementsByTagName('a')

//创建一个鼠标点击事件
var click = new MouseEvent('click')
for(var i=0;i<arrAdlinks.length;i++){
    //触发dianji事件
    arrAdlinks[i].dispatchEvent(click)
}