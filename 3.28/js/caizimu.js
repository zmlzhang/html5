var arr=[]   //26个字母
for(var i=65;i<91;i++){
    arr.push(String.fromCharCode(i))
}

var code = Math.floor(Math.random()*26)
var cur = arr[code]
var h = document.getElementById('h')
h.innerText = cur
// h.innerText = arr[code]

document.body.onkeyup = function(e){
    if(e.key.toUpperCase() == cur){
        code = Math.floor(Math.random()*26)
        cur = arr[code]
        h.innerText = cur
    }else{
        alert('输入错误')
    }
}




//第二种方法
var h = document.getElementById('h')   //..
var indexCode  //随机
var curCode 
function setData(){
    indexCode = Math.floor(Math.random()*26)
    curCode = arr[indexCode]
    h.innerText = curCode 
}
document.body.onkeydown =function(e){
    h.classList.remove('wobble') 
}
document.body.onkeyup = function(e){
        //删除指定的样式
    if(e.key.toUpperCase() == curCode){
        setData()
    }
    else{
        //classLsit  表示标签的样式集合，通过add添加  通过remove删除
        h.classList.add('wobble')    //通过classList属性 添加动画效果
    }
}
setData()