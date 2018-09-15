// client/pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userNick: ".Lee",
    isAddFavorGoods: false,
    goodsStatus: [{
      "id": "statues_0",
      "url": "../../images/be_payment.png",
      "status": "待付款",
      "isHandler": false,
      "handlerNum": "3"
    }, {
      "id": "statues_1",
      "url": "../../images/be_delivered.png",
      "status": "待发货",
      "isHandler": false,
      "handlerNum": "4"

    }, {
      "id": "statues_2",
      "url": "../../images/be_receipt.png",
      "status": "待收货",
      "isHandler": true,
      "handlerNum": "0"
    }, {
      "id": "statues_3",
      "url": "../../images/be_evaluated.png",
      "status": "待评价",
      "isHandler": false,
      "handlerNum": "3"
    }, {
      "id": "statues_4",
      "url": "../../images/be_return.png",
      "status": "退换货",
      "isHandler": true,
      "handlerNum": "0"
    }],
    personalService: [{
        "id": "service_0",
        "url": "../copyWeChat/copyWeChat",
        "serviceImage": "../../images/coupon.png",
        "name": "优惠券"
      }, {
        "id": "service_1",
        "url": "../copyWeChat/copyWeChat",
        "serviceImage": "../../images/favor.png",
        "name": "收藏"
      }, {
        "id": "service_2",
        "url": "../address/address",
        "serviceImage": "../../images/address.png",
        "name": "地址"
      },
      {
        "id": "service_3",
        "url": "../copyWeChat/copyWeChat",
        "serviceImage": "../../images/customer.png",
        "name": "客服"
      },
      {
        "id": "service_4",
        "url": "../copyWeChat/copyWeChat",
        "serviceImage": "../../images/aboutAs.png",
        "name": "关于我们"
      },
    ],
    goodsList: [{
      "id": "goods_0",
      "name": "耳乐保夏季睡觉护眼罩睡眠遮光透气男女士款耳塞防噪音三件套",
      "goodsImage": "../../goodsImage/200836455467636230.jpg",
      "price": "￥29.89",
      "buyer":"3550"
    }, {
      "id": "goods_1",
      "name": "男士长袖T恤秋季新款圆领卫衣潮流打底衫2018秋衣韩版上衣服男装",
      "goodsImage": "../../goodsImage/608738460262225988.jpg",
      "price": "￥68.03",
        "buyer": "12505"
    }, {
      "id": "goods_2",
      "name": "3D菱形极光玻璃6s苹果x手机壳iphone7plus奢华保护套8p防摔全包女",
      "goodsImage": "../../goodsImage/579207095686205840.jpg",
      "price": "￥26.54",
      "buyer": "350"
    }, {
      "id": "goods_3",
      "name": "人字拖男时尚外穿情侣男士拖鞋夏夹脚防滑凉拖黑色沙滩凉鞋潮室外",
      "goodsImage": "../../goodsImage/772626852914700328.jpg",
      "price": "￥18.75",
        "buyer": "950"
    }]
  },

  personalSet:function(){ //个人信息设置

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
    var that = this
    that.setData({
      isAddFavorGoods: true
    })
    setTimeout(function() {
      that.addGoods()
      console.log("延迟调用============加载数据")
      that.setData({
        isAddFavorGoods: false
      })
    }, 2000)

  },

  addGoods: function() {
    var that = this
    var list = that.data.goodsList
    var len = list.length
    list[len] = {
      "id": "goods_" + len,
      "name": "3D菱形极光玻璃6s苹果x手机壳iphone7plus奢华保护套8p防摔全包女",
      "goodsImage": "../../goodsImage/579207095686205840.jpg",
      "price": "￥26.54"
    }
    list[len + 1] = {
      "id": "goods_" + (len + 1),
      "name": "人字拖男时尚外穿情侣男士拖鞋夏夹脚防滑凉拖黑色沙滩凉鞋潮室外",
      "goodsImage": "../../goodsImage/772626852914700328.jpg",
      "price": "￥18.75"
    }
    that.setData({
      goodsList: list
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})