var arrWeeks = ['日','一','二','三','四','五','六']
var div = document.getElementById('app') //获取div标签


function setVal(params){
    //通过new关键字创建一个新的日期对象在方法内部使用
    //日期对象的数据*1 表示日期
    var now = new Date(params*1)
    var table = document.createElement('table')//创建一个table

    var th = table.createTHead()//表格标题
    var thRow = th.insertRow()
    var thCell = thRow.insertCell()
    thCell.colSpan = 7
    thCell.innerText = now.getFullYear()+"年"+(now.getMonth()+1)+"月"

    var td = table.createTBody() //创建一个tbody标签
    var row = td.insertRow() //创建一个tr
    row.classList.add('thead')//为表头添加样式
    for(var i=0;i<7;i++){
        var cell = row.insertCell() //在tr中创建一列
        cell.innerText = arrWeeks[i]
    }

    //var now = new Date()//当前时间
    var monthStart = new Date(now.setDate(1)) //获取当月的一号
    var monthStartWeekDay = monthStart.getDay() //获取一号是星期几
    var dyMonth = new Date(now.setDate(1)) //定义一个日期计算的时候使用的值
    var dyBefore = new Date(now.setDate(-monthStartWeekDay)) //当前月开始之前的月份信息


    var current = new Date()

    for(var m=0;m<6;m++){
        var dyRow = td.insertRow() //添加一行
        for(var i=0;i<7;i++){
            var dyCell = dyRow.insertCell()
            if(dyMonth.getFullYear() == current.getFullYear() && dyMonth.getMonth()==current.getMonth() && dyMonth.getDate()==current.getDate()){
                dyCell.classList.add('cur')
            }
            if(monthStartWeekDay<=(i+7*m)){
                dyCell.innerText = dyMonth.getDate()//
                if(dyMonth.getMonth()!=monthStart.getMonth()){
                    dyCell.style.color = '#999'
                }
                dyMonth.setDate(dyMonth.getDate()+1)
            }
            else{
                dyBefore.setDate(dyBefore.getDate()+1)
                dyCell.innerText = dyBefore.getDate()
                dyCell.style.color = '#999'
            }
        }
    }
    div.appendChild(table)
}


var globalNow = new Date()//获取当前时间作为一个全局变量进行存储使用
setVal(globalNow)

//上一个月
function preMonth(){
    div.innerHTML = ''
    //每一个月的开始时间设置为1号
    var temDate = new Date(globalNow.setMonth(globalNow.getMonth()-1,1))
    setVal(temDate)
}
//下一个月
function nextMonth(){
    div.innerHTML = ''
    //每一个月的开始时间设置为1号
    var temDate = new Date(globalNow.setMonth(globalNow.getMonth()+1,1))
    setVal(temDate)
}
