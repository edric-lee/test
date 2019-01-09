// home.js
//引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../data/json.js');


var max = 0
for (var p in jsonData.dataList) {
  if (jsonData.dataList[p].basicCabinType == "Y") {
    if (jsonData.dataList[p].CabinType == "Y") {
      if (max<jsonData.dataList[p].SinglePrice){
        max = jsonData.dataList[p].SinglePrice
      }
    }
  }
}
console.log(max)
Page({
  data: {
    number: 10
  },
  //我们在这里加载本地json数据
  onLoad: function () {
    this.setData({
      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
      dataList: jsonData.dataList,
      max:max
    });
    
  },
})
