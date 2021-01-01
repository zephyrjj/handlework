// pages/handinhomework/handinhomework.js
const date = new Date();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isLogin:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.userInfoCallback = userInfo => {
      if(userInfo!='empty'){
        this.setData({
          isLogin:true,
          class:userInfo.class,
          name:userInfo.neckname
        })
      }
    }
    var day = date.getDay();
    var month = date.getMonth()+1;
    var dat = date.getDate();
    var Da= this.getDay(day);
    this.setData({
      day: Da,
      date: month+'月'+dat+'日'
    });
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
    if(app.globalData.userInfo){
      this.setData({
        isLogin:true,
        name:app.globalData.userInfo.neckname,
        class:app.globalData.userInfo.class
      })
    }
  },
  getDay(day){
    switch (day) {
      case 1:
        return '周一';
      case 2:
        return '周二';
      case 3:
        return '周三';
      case 4:
        return '周四';
      case 5:
        return '周五';
      case 6:
        return '周六';
      case 7:
        return '周日';
    };
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