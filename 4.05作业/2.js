
var tb = document.querySelector('#tb')

if (localStorage.nages) {
//   localStorage.nages.forEach(function(item){

//   })
} else {
    localStorage.nages = "[]"
}
var na = JSON.parse(localStorage.nages)

function submit1(e) {
    e.preventDefault()    //阻止表单的默认提交行为

    var idAge = document.querySelector('#idage').value.trim()
    var idName = document.querySelector('#idUserName').value

    if (idName.trim() == "") {
        alert('用户名不能为空')
        return //不在执行后面的代码 
    }
    else if (idAge.value < 0 || idAge.value > 140) {
        alert('请输入正确的年龄')
        return
    }
    else {
        var p = {}
        p.name = idName
        p.age = idAge
        na.push(p)

        localStorage.nages = JSON.stringify(na)
        console.log(localStorage.nages.length)
    }
    tb.innerHTML += '<tr><td>' + idName + '</td><td>' + idAge + '</td></tr>'
}
