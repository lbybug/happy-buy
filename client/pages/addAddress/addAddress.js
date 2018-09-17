// pages/addAddress/addAddress.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    userPhone: "",
    detail: "",
    region: ['---', '---', '---'],
  },

  selectRegion: function(res) {
    this.setData({
      region: res.detail.value
    })
  },

  getUserName: function(res) {
    this.setData({
      userName: res.detail.value
    })
  },
  getUserPhone: function(res) {
    this.setData({
      userPhone: res.detail.value
    })
  },
  getDetail: function(res) {
    this.setData({
      detail: res.detail.value
    })
  },
  addNewAddress: function() {
    var that = this
    that.addNew(true)
  },
  cancelToAdd: function() {
    var that = this
    that.addNew(false)
  },

  addNew: function(isAdd) {
    var that = this
    var name = that.data.userName
    var phone = that.data.userPhone
    var region = that.data.region
    var detail = that.data.detail
    var pages = getCurrentPages()
    var prePages = pages[pages.length - 2]
    console.log(prePages)
    if (isAdd) {
      var list = prePages.data.addressList
      var newAddress = {
        cityName: region[1],
        countyName: region[2],
        detailInfo: detail,
        errMsg: "ok",
        nationalCode: "null",
        postalCode: "null",
        provinceName: region[0],
        telNumber: phone,
        userName: name
      }
      list[list.length] = newAddress
      prePages.setData({
        addressList: list
      })
    }
    wx.navigateBack({
      delta: 1
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

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