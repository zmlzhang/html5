function clicked(event){
    console.group('图片点击')
    //当前点击位置距离当前对象左上角偏移
    console.log('x：'+event.offsetX)
    console.log('y：'+event.offsetY)

    var x = event.offsetX
    var y = event.offsetY
    if(697<x && x<780 && 250<y && y<555){
        alert('僵小鱼')
    }
    console.groupEnd('图片点击')
}