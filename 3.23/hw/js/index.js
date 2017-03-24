//编辑区域
var ed = document.createElement('div')

//内容显示区域
var show = document.createElement('div')

//常见输入框 
var input = document.createElement('textarea')
input.cols = 60   //设置hang
input.rows = 10    //设置航
//创建按钮
var btn = document.createElement('button')
btn.innerText = '确定'   //为按钮添加文字
btn.onclick = function(){   //为按钮添加点击事件
    //点击按钮之后获取输入框的内容
    var str = input.value.trim()  //通过trim去除开始和结尾的空格

    if(str == ''){
        alert('输入内容不能为空')
    }
    else{
        var h5 = document.createElement('h5')
        h5.innerText = str
        show.appendChild(h5)

        // input.value = ''    //清空输入框的内容
    }
}

//吧标签插入到页面     appendChild在标签的内部教育子节点，子节点出现在最后面
document.body.appendChild(ed)    //把编辑区域的容器加入到body
document.body.appendChild(show)  //把现实区域加入到body页面

ed.appendChild(input)
ed.appendChild(btn)


//创建一个按钮
var btu = document.createElement('button')
btu.innerText = '添加标签'
btu.onclick = function(){
    var str = input.value.trim()
    if(str == ''){
        alert('输入内容不能为空')
    }
    else{
        var h3 = document.createElement('h3')
        h3.innerHTML = str
        show.appendChild(h3)

        input.value = ''
    }
}
ed.appendChild(btu)

