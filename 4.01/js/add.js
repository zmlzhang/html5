//根据id找到标签
var pro = document.getElementById('pro')
var city = document.getElementById('city')
var xian = document.getElementById('xian')

//初始化html标签
function initP(){
    pro.innerHTML += '<option>请选择</option>'
    arrProvince.forEach(function(item){
        pro.innerHTML += `<option value="${item.ProID}">${item.name}</option>`
    })
}

//初始化地市选择标签
function initC(){
    var selPVal = pro.value       //获取省级的数据选择
    var tem = arrCity.filter(function(c){
        if(c.ProID == selPVal){
            return c
        }
    })
    city.innerHTML = '<option>请选择</option>'
    tem.forEach(function(c){
        city.innerHTML += `<option value="${c.CityID}">${c.name}</option>`
    })
}

function initA(){
    var selCVal = city.value  
    console.log(1)
    var tem = arrArea.filter(function(a){
        if(a.CityID == selCVal){
            return a
        }
    })
    xian.innerHTML = '<option>请选择</option>'
    tem.forEach(function(a){
        xian.innerHTML +=`<option value="${a.Id}">${a.DisName}</option>`
    })
}

initP()
initC()
initA()
pro.onchange = function(){
    initC()
    initA()
}
city.onchange = function(){
    initA()
}

