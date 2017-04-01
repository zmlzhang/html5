var arr = [{
        name: 'Tom',
        enName: 'Tom Green',
        age: 19,
    },
    {
        name: 'LimeiTom',
        enName: 'Tom Li',
        age: 39,
    }, {
        name: '寒梅',
        enName: 'han Mei',
        age: 29,
    },
]
var txt = document.getElementById('txt')
var list = document.getElementById('list')
    //循环数组数据 绑定在页面
arr.forEach(function(item) {
        list.innerHTML += '<li>我的名字是' + item.name + ',我今年' + item.age + '岁了</li>'
    })
    /**
     * 字符串中的indexOf方法 获取指定字符串在原字符串中第索引位置
     *如果存在 那么返回索引 ，否则返回-1；
     *数组的filter方法 对数组中所有元素做筛选操作 符合指定条件的值返回生成一个新数组对象
     */
txt.onkeyup = function(e) {
    var str = txt.value.toLowerCase() //获取输入内容
    var arrNew = arr.filter(function(item) {
        if (item.enName.toLowerCase().indexOf(str) > -1 || item.name.indexOf(str) > -1) {
            return item
        }
    })
    list.innerHTML = '' //清除ul中已有的值
    arrNew.forEach(function(item) {
        list.innerHTML += '<li>我的名字是' + item.name + ',我今年' + item.age + '岁了</li>'
    })
}

function initHTML(temArr) {
    list.innerHTML = '' //清除ul中已有的值
    arrNew.forEach(function(item) {
        list.innerHTML += '<li>我的名字是' + item.name + ',我今年' + item.age + '岁了</li>'

    })
}