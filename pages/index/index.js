Page({
  data: {
    // 用于保存当日天气数据
    weather: [],
    // 用于保存未来天气数据
    future: []
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    wx.request({
      url: 'http://apis.haoservice.com/lifeservice/train/ypcx',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.results);
        // _this.setData({
        //   weather: res.data.results[0].index
        //   future: res.data.results[0].weather_data
        // })
      }
    })
  }
})



// var jsonData = require('../../data/json.js');


// var max = 0
// for (var p in jsonData.dataList) {
//   if (jsonData.dataList[p].basicCabinType == "Y") {
//     if (jsonData.dataList[p].CabinType == "Y") {
//       if (max<jsonData.dataList[p].SinglePrice){
//         max = jsonData.dataList[p].SinglePrice
//       }
//     }
//   }
// }
// console.log(max)
// Page({
//   data: {
//     number: 10
//   },
//   //我们在这里加载本地json数据
//   onLoad: function () {
//     this.setData({
//       //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
//       dataList: jsonData.dataList,
//       max:max
//     });
    
//   },
// })
