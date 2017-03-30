var h5 = document.getElementById('h5')
/*function setHText() {
    var now = new Date()    //创建一个时间对象
    console.dir(now)
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()
    h5.innerText = h + ':' + m + ':' + s
}
setInterval(setHText, 1000)
*/


/**
 * Date.now()   获取当前时间距离1970年1月1日的毫秒数  又叫时间戳
 */
var now = new Date()
var arr = ['日','一','二','三','四','五','六']
function pry() {
    // var day = new Date(Date.now() - 24 * 60 * 60 * 1000)
    // var year = day.getFullYear()
    // var yue = day.getMonth() + 1
    // var date = day.getDate()
    // h5.innerText = year + '-' + yue + '-' + arr[week]
    getData(-1)
}
function next() {
    // var day = new Date(Date.now() + 24 * 60 * 60 * 1000)
    // var year = day.getFullYear()
    // var yue = day.getMonth() + 1
    // var date = day.getDate()
    // var week= day.getDay()
    // h5.innerText = year + '-' + yue + '-' + date +'    ' + '星期'+ week
    getData(1)
}


function getData(p){
    var day = new Date(Date.now() + 24 * 60 * 60 * 1000)
    var year = day.getFullYear()
    var yue = day.getMonth() + 1
    var date = day.getDate()
    var week= day.getDay()
    h5.innerText = year + '-' + yue + '-' + date +'    ' + '星期'+ week
}



var now = new Date()
/**
 * setMonth 针对指定的一个事件值设置月份
 * 参数一   月份
 * 参数二   日期 可选  如果不写默认为当前日期左计算
 *              备注：如果传似的月份参数小于0 的时候那么时间就往当前年的上一年计算
 *                  如果传递的日期大于31 那么计算的时间就往下一个月进行
 * 返回值为时间戳
 */

// var tem = now.setMonth(1,1)     //只修改月份
// console.log(new Date(tem))

var temD = now.setDate(1)
console.log(new Date(temD))