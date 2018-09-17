// client/pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: []
  },

  getWeChatAddress: function() {
    var that = this
    var list = that.data.addressList
    wx.chooseAddress({
      success: (res) => {
        console.log(res)
        if (list.length == 0) {
          list = that.addWeChatAddress(list, res, true)
        } else {
          list = that.addWeChatAddress(list, res, false)
        }
        that.setData({
          addressList: list
        })
      }
    })
  },

  addWeChatAddress: function (list, res, flag) {
    var that = this
    list[list.length] = {
      addressId: "address_"+list.length,
      cityName: res.cityName,
      countyName: res.countyName,
      detailInfo: res.detailInfo,
      errMsg: "ok",
      nationalCode: "null",
      postalCode: "null",
      provinceName: res.provinceName,
      telNumber: res.telNumber,
      userName: res.userName,
      isDefault: flag
    }
    return list
  },

  addNewAddress: function(len) {
    wx.navigateTo({
      url: '../addAddress/addAddress',
    })
  },

  updateDefault:function(res){
    console.log(res)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.clearStorage()
    var that = this
    wx.getStorage({
      key: 'userAddress',
      success: function(res) {
        that.setData({
          addressList: res.data
        })
      },
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {


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
    var that = this
    var list = that.data.addressList
    if (list.length != 0) {
      wx.setStorage({
        key: 'userAddress',
        data: list,
      })
    }
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