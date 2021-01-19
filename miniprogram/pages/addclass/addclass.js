// pages/addclass/addclass.js
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit(e) {
    let classInfo = e.detail.value
    if (classInfo.cname != '' && classInfo.num != '') {
      wx.cloud.callFunction({
        name: 'createClass',
        data: {
          cname: classInfo.cname,
          num: classInfo.num,
          _id: app.globalData.userInfo._id
        },
        success: res => {
          if (res.result) {
            app.globalData.classdeatil.cName = classInfo.cname
            app.globalData.userInfo.class = res.result.classid
            app.globalData.classdeatil.inviteNum = res.result.inviteNum
            wx.showToast({
              title: '创建成功 ',
              icon: 'success',
              duration:2000
            })
            setTimeout(wx.reLaunch({
              url: '/pages/myclass/myclass',
            }),1500
          ) 
          }else{
            wx.showToast({
              title: '发生了错误请稍后再试',
              icon: 'none'
            })
          }
        },
        fail: err => {
          wx.showToast({
            title: '发生了错误请稍后再试',
            icon: 'none'
          })
        }
      })
    } else {
      wx.showToast({
        title: '两个空都必填哦！',
        icon: 'none'
      })
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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