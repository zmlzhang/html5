/**
 * 定义一个Api对象
 */
var Api = {}
//获取数据
Api.getAllData = function(){
    var result = []
    if(localStorage.people){  //如果localStorage中存在people。那么格式化people数据进行返回
        result = JSON.parse(localStorage.people)
    }
    return result
}
//保存数据
Api.save = function(data){
    // console.log(data)
    // console.log(this)  //输出一下save中的this
    var allData = this.getAllData()
    allData.push(data)
    localStorage.people = JSON.stringify(allData)
    
}