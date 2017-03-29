// var arrzimu = []     //26个字母
// for(var i = 65;i<91;i++){
//     // String.fromCharCode()    根据编码获取内容
//     arrzimu.push(String.fromCharCode(i))
// }
// console.log(arrzimu)
// var str = ''
// for(var j = 0;j<arrzimu.length;j++){
   
//     var sjzm = Math.floor(Math.random()*26)
//     str += arrzimu[sjzm]
// }
// console.log(str)


var arrzimu = []
for (var i = 65; i < 91; i++) {
    arrzimu.push(String.fromCharCode(i))
}
console.log(arrzimu)
// 产生随机数
var h = document.getElementById('h')
function game() {
    var num = arrzimu[parseInt(Math.random() * 26)]
    console.log(num)
    h.innerText = num
}

document.body.onkeyup = function (e) {
    // 当按键==F5 
    if (e.key == 'F5') {
    }
    else {
        // 输入正确
        if (e.key.toUpperCase() == h.innerText) {
            console.log('bbb')
            game()
            h.style.color = 'black'
        }
        // 输入错误 
        else {
            h.style.color = 'red'
        }
    }
}