
var tb = document.querySelector('#tb')
function submit1(e) {
    e.preventDefault()    //阻止表单的默认提交行为

    var idAge = document.querySelector('#idage').value.trim()
    var idName = document.querySelector('#idUserName').value
   
    if (idName.trim() == "") {
        alert('用户名不能为空')
        return //不在执行后面的代码 
    }
    if (idAge.value < 0 || idAge.value > 140) {
        alert('请输入正确的年龄')
        return
    }

    tb.innerHTML += '<tr><td>' + idName + '</td><td>' + idAge + '</td></tr>'
}
