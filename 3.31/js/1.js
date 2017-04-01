// var arr = [{
//     name: 'Tom',
//     enName: 'Tom Green',
//     age: 18
// }, {
//     name: '李明',
//     enName: 'Li Lei',
//     age: 21
// }, {
//     name: '小高',
//     enName: 'Xiao Gao',
//     age: 20
// }]
var txt = document.getElementById('txt')
var list = document.getElementById('list')
//循环数组数据，绑定在页面上
arr.forEach(function (item) {
    list.innerHTML += '<li>我的名字是' + item.name + '，我今年' + item.age + '岁了<>'
})

// initHtml(arr)   //  1

/**
 * 字符串中的indexOf()方法，获取指定的字符串在原字符串中的索引值
 *      如果存在，那么返回索引值，否则返回-1
 * 
 * 数组中的filter方法，对数组中的所有元素做筛选操作，符合置顶条件的值
 *      返回生成一个新的数组对象
 */
txt.onkeyup = function (e) {
    //toLowerCase() 方法用于把字符串转换为小写。
    var str = txt.value.toLowerCase()//获取输入内容
    var arrNew = arr.filter(function (item) {
        if (item.enName.toLowerCase().indexOf(str) > -1) {
            return item
        }
    })
    // list.innerHTML = ''  //清除ul中已有的值
    // arrNew.forEach(function (item) {
    //     list.innerHTML += '<li>我的名字是' + item.name + '，我今年' + item.age + '岁了</li>'
    // })

    initHtml(arrNew)   //  1

}


//  1
function initHtml(temArr){
    list.innerHTML=''  //清除ul中已有的值
    temArr.forEach(function(item){
        list.innerHTML+='<li>'+item.title+'</li>'

        /**
         * 在chrome或者火狐和ie的行版本中可以使用``直接拼接字符串  在字符串中间使用${}插入js
         */
        list.innerHTML += `<li>
                                <img src="${item.img}">
                                <a href = "${item.link}">${item.title}</a>
                           </li>`
    })
}