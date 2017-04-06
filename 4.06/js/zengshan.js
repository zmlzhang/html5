// var arrP = []
// if(localStorage.people){
//     arrP = JSON.parse(localStorage.people)
// }
// else{
//     localStorage.people = '[]'
// }

//拼接字符串在页面上显示

function init(){
    var arrP =Api.getAllData()   //调用api对象上的获取数据的方法
    tb.innerHTML = ''
    arrP.forEach(function(item){
        tb.innerHTML += `<tr>
                            <td>${item.name}</td>
                            <td>${item.age}</td>
                         <tr>`
    })
}

var tb = document.querySelector('#tb')
function submit1(e) {
    e.preventDefault()    //阻止表单的默认提交行为

    var idAge = document.querySelector('#idage').value.trim()
    var idName = document.querySelector('#idUserName').value
   
    if (idName.trim() == "") {
        alert('用户名不能为空')
        return //不在执行后面的代码 
    }
    if (idAge < 0 || idAge > 140) {
        alert('请输入正确的年龄')
        return
    }
    var obj = {}
    obj.name = idName
    obj.age = idAge
    // arrP.push(obj)
    // localStorage.people = JSON.stringify(arrP)
    Api.save(obj)
    init()
    // tb.innerHTML += '<tr><td>' + idName + '</td><td>' + idAge + '</td></tr>'
}
init()


// console.log(Api.getAllData())
// Api.save({name:'小米',age:17})


