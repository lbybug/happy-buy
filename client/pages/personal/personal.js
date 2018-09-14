// client/pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userNick: ".Lee",
    goodsStatus: [{
      "id": "0",
      "url": "../../images/be_payment.png",
      "status": "待付款",
      "isHandler": false,
      "handlerNum": "3"
    }, {
      "id": "1",
      "url": "../../images/be_delivered.png",
      "status": "待发货",
      "isHandler": false,
      "handlerNum": "4"

    }, {
      "id": "2",
      "url": "../../images/be_receipt.png",
      "status": "待收货",
      "isHandler": true,
      "handlerNum": "0"
    }, {
      "id": "3",
      "url": "../../images/be_evaluated.png",
      "status": "待评价",
      "isHandler": false,
      "handlerNum": "3"
    }, {
      "id": "4",
      "url": "../../images/be_return.png",
      "status": "退换货",
      "isHandler": true,
      "handlerNum": "0"
    }],
    personalService: [{
        "id": "0",
        "url": "../index/index",
        "serviceImage": "../../images/coupon.png",
        "name": "优惠券"
      }, {
        "id": "1",
        "url": "../index/index",
        "serviceImage": "../../images/favor.png",
        "name": "收藏"
      }, {
        "id": "2",
        "url": "../index/index",
        "serviceImage": "../../images/address.png",
        "name": "地址"
      },
      {
        "id": "3",
        "url": "../index/index",
        "serviceImage": "../../images/customer.png",
        "name": "客服"
      },
      {
        "id": "4",
        "url": "../index/index",
        "serviceImage": "../../images/aboutAs.png",
        "name": "关于我们"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})