function charu() {
    var tb = document.querySelector('#tb')
    var tr = tb.insertRow()
    for (var m = 0; m < 2; m++) {
        var td = tr.insertCell()
        if(m=0){
            td.innerText = user.value
        }
        else{
            td.innerText = age.value
        }
    }
}
var user = document.querySelector('#username')
var age = document.querySelector('age')
function submit(e) {
    console.log('209834897')
    if (user.value == '' && 1 < age.value && age.value < 140) {
        alert('请输入姓名或者正确的年龄')
    }
    else {
        charu()
    }
}