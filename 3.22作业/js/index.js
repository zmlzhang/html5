//第一个div
var ed = document.createElement('div')
// ed.style.backgroundColor = 'rgba(120,0,0,0.8)'
document.body.appendChild(ed)

//第二个div
var con = document.createElement('div')
document.body.appendChild(con)

// 输入框
var int = document.createElement('input')
int.type ='text'
int.id='txt'
ed.appendChild(int)

//button
var btu = document.createElement('button')
btu.innerText = '确定'
// btn.innerText = '按钮'
btu.onclick = function(){
    var str = int.value.trim()

    if(str == ''){
        alert('不能输入空白内容')
    }
    else{
        var h5 = document.createElement('h5')
        h5.innerText = str
        con.appendChild(h5)
    }
}
ed.appendChild(btu)
