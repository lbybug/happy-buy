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
    isUpdate: false,
    preIndex: 0
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
    var preIndex = that.data.preIndex
    var isUpdate = that.data.isUpdate
    var pages = getCurrentPages()
    var prePages = pages[pages.length - 2]
    console.log(prePages)
    if (isAdd) {
      var list = prePages.data.addressList
      var isDefault = false
      if (list.length == 0) {
        isDefault = true
      }
      if (isUpdate) {
        isDefault = list[preIndex].isDefault
      } else {
        preIndex = list.length
      }
      console.log(isDefault)
      var newAddress = {
        addressId: "address_" + preIndex,
        cityName: region[1],
        countyName: region[2],
        detailInfo: detail,
        errMsg: "ok",
        nationalCode: "null",
        postalCode: "null",
        provinceName: region[0],
        telNumber: phone,
        userName: name,
        isDefault: isDefault
      }
      list[preIndex] = newAddress
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
    var that = this
    var pages = getCurrentPages()
    var prePages = pages[pages.length - 2]
    console.log(prePages)
    if (options != null) {
      console.log(options)
      var index = options.updateIndex
      var data = prePages.data.addressList[index]
      that.setData({
        isUpdate: true,
        preIndex: index,
        userName: data.userName,
        userPhone: data.telNumber,
        detail: data.detailInfo,
        region: [data.provinceName, data.cityName, data.countyName]
      })
    }
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