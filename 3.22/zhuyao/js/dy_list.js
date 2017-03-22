var tag = document.querySelector('#txt')    //获取页面中文本输入框
var tagc = document.querySelector('.con')   //获取容器id
function btn(){
    // alert('0000000')
    // var h5 = document.createElement('h5')
    // h5.innerText = '我是一个h5 标签'
    // var div = document.getElementsByClassName(con)
    // div.appendChild(h5)

    //通过trim操作把字符串了开始和结尾的空白内容进行处理
    var str = tag.value.trim()   //获取输入框中的输入内容
    if(str == ""){
        alert('不能输入为空')   //判断输入内容是否为空
    }
    else{
        var h5  = document.createElement('h5')
        h5.innerText = str
        tagc.appendChild(h5)
    }
}
