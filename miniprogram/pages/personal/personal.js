// pages/personal/personal.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  //修改名字
  name(e){
    console.log(e.detail.value)
    this.setData({
      name:e.detail.value
    })
  },
  //修改学号
  sco(e){
    console.log(e.detail.value)
    this.setData({
      sco:e.detail.value
    })
  },
  //修改班级
  myclass(e){
    console.log(e.detail.value);
    this.setData({
      myclass:e.detail.value
    })
  },
  //修改名字
  phone(e){
    console.log(e.detail.value);
    this.setData({
      phone:e.detail.value
    })
  },
  //保存
  change:function(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name:app.globalData.userInfo.neckname,
    
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})