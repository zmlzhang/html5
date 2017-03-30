var idAge = document.querySelector('#idage')
var idName = document.querySelector('#idUserName')

function submit1(e){
    e.preventDefault()    //阻止表单的默认提交行为

    //trim()  去除字符串开始和结束位置的空格
    if(idName.value.trim() == ""){
        alert('用户名不能为空')
        return //不在执行后面的代码 
    }
    if(idAge.value <0 || idAge.value >140){
        alert('请输入正确的年龄')
        return
    }

    var temTr = tb.insertRow()
    var temCellName = temTr.insertCell()    //创建一个单元格展示用户名
    var temAge = temTr.insertCell()         //创建一个单元格展示年龄
    
    temAge.innerText = idAge.value
    temCellName.innerText = idName.value
}

var table = document.createElement('table')
//添加样式
table.classList.add('table')
table.classList.add('table-striped')
table.classList.add('table-bordered')
//创建表头
var th = table.createTHead()   //创建表头
var thRow = th.insertRow()     //在thead中创建一行
var thCellUserName = thRow.insertCell()     //创建一个单元格
thCellUserName.innerText = '用户名'       //设置单元格的文字
var thCellAge = thRow.insertCell()
thCellAge.innerText = '年龄'

var tb = table.createTBody()     //

var div = document.querySelector('.container')
div.appendChild(table)