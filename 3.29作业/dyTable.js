
var arrWeeks = ['日', '一', '二', '三', '四', '五', '六']
var div = document.getElementById('app')  //获取div标签
var table = document.createElement('table')  //创建一个table

var th = table.createTHead()  //表格标题
var thRow = th.insertRow()
var thCell = thRow.insertCell()
thCell.colSpan = 7
thCell.innerText = '日期选择效果'
thCell.style = 'text-aline=center'

var td = table.createTBody()  //创建一个tbody标签
var row = td.insertRow()  //创建一个tr
//为表头添加样式  classList.add('thead')样式集合
row.classList.add('thead')
for (var i = 0; i < 7; i++) {
    var cell = row.insertCell()   //在tr中创建一列
    cell.innerText = arrWeeks[i]
}

var now = new Date()  //当前时间
var monthStart = new Date(now.setDate(1))  //获取当月的1号
var monthStartWeekDay = monthStart.getDay()  //获取1号是星期几
var dyMonth = new Date(now.setDate(1)) //定义一个日期计算的时候使用的值

for (var j = 0; j < 6; j++) {
    var dyRow = td.insertRow()  //添加一行
    for (var i = 0; i < 7; i++) {
        var dyCell = dyRow.insertCell()
        if (monthStartWeekDay <= (i+ j*7)){
            dyCell.innerText = dyMonth.getDate()  //
        
            if(dyMonth.getMonth() != monthStart.getMonth()){
                dyCell.style.color = '#aaa'
            }

            dyMonth.setDate(dyMonth.getDate() + 1)
        }
        else {
            dyCell.innerText = ''
        }
    }
}



// var startWeekDay=now.getDay()
// var dyRow=td.insertRow()    //动态创建一行数据
// var dyDate=now.setDate(1)  //获取1号时间

// for(var i=0;i<7;i++){
//     var dyCell=dyRow.insertCell()   //动态创建一列数据

//     if(i==startWeekDay){
//         dyDate=new Date(dyDate.setDate(i+1))
//         dyCell.innerText=now.getDate()
//     }
//     else{
//         dyCell.innerText=''
//     }
// }

div.appendChild(table)

