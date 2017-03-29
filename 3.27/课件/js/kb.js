var p = document.getElementById('show')    //获取p标签
var h = document.getElementById('lbl')    //获取h5标签
var txt = document.getElementById('txt')   //获取输入框中的内容
function up(e){
    p.innerText = txt.value     //设置p标签的文本内容
    if(e.keyCode == 13){     //按下回车键后设置h标签的文本内容
        h.innerText = txt.value
    }

}