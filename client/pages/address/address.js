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

  addWeChatAddress: function(list, res, flag) {
    var that = this
    list[list.length] = {
      addressId: "address_" + list.length,
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

  updateDefault: function(res) { //更新默认地址
    var that = this
    var list = that.data.addressList
    var index = res.currentTarget.id.split('_')[1]
    var flag = list[index].isDefault
    if (flag) {
      flag = true
    } else {
      wx.showLoading({
        title: '正在切换默认地址',
      })
      for (var i = 0; i < list.length; ++i) {
        if (i != index) {
          list[i].isDefault = false
        }
      }
      list[index].isDefault = true
    }
    setTimeout(function() {
      wx.hideLoading()
      that.setData({
        addressList: list
      })
    }, 800)

  },

  deleteAddress: function(res) { //删除地址
    var that = this
    var list = that.data.addressList
    var index = res.currentTarget.id.split('_')[1]
    var tmpList = []
    var num = 0
    var flag = list[index].isDefault
    wx.showModal({
      title: '提示',
      content: '确定删除这条地址吗？',
      success: () => {
        for (var i = 0; i < list.length; ++i) {
          if (i != index) {
            tmpList[num] = list[i]
            tmpList[num].addressId = "address_" + num
            num++
          }
        }
        if(tmpList.length != 0){
          if (flag) {
            tmpList[0].isDefault = true
          }
        }
        that.setData({
          addressList: tmpList
        })
      },
      fail: () => {

      }
    })
  },
  updateAddress: function(res) { //更新地址
    var that = this
    var index = res.currentTarget.id.split('_')[1]
    wx.navigateTo({
      url: '../addAddress/addAddress?updateIndex=' + index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.clearStorage()
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