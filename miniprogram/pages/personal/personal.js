
var app = getApp()
const db = wx.cloud.database()
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
  
  //修改名字
  phone(e){
    console.log(e.detail.value);
    this.setData({
      phone:e.detail.value
    })
  },

  //保存
  change:function(e){
    let userInfo =  app.globalData.userInfo
    let detail = e.detail.value
    db.collection('User').doc(userInfo._id).update({
      data:{
        neckname:detail.name,
        phone:detail.phone,
        sco:detail.sco
      },
      success: res=>{
        wx.showToast({
          title: '修改成功',
        })
        userInfo.neckname = detail.name
        userInfo.sco = detail.sco
        userInfo.phone = detail.phone
        app.globalData.userInfo = userInfo
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    this.setData({
      name:app.globalData.userInfo.neckname,
      sco:app.globalData.userInfo.sco,
      phone:app.globalData.userInfo.phone
    })
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