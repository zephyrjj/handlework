var app = getApp()
// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false
  },

  //跳转到我的班级
  myclass(e) {
    wx.navigateTo({
      url: '/pages/myclass/myclass',
    })
  },
  //跳转到我的作业
  homework(e) {

  },
  //跳转到下载作业
  download(e) {

  },
  //跳转到修改资料
  change: function () {
    wx.navigateTo({
      url: '/pages/personal/personal',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '请稍等',
      mask: true
    })
    this.login()
  },
  getUserInfo: function (e) {
    if (e.detail.userInfo) {
      this.add(e.detail.userInfo)
      this.setData({
        isLogin: true,
        name:e.detail.userInfo.neckName
      })
      
    } else {

      wx.showToast({
        title: '需要授权哦',
        icon: 'none'
      })
    }


  },
  add: function (e) {
    const db = wx.cloud.database()
    const user = db.collection('User')
    user.add({
      data: {
        neckname: e.nickName,
        sco: '',
        phone: '',
        class: ''
      }


    })

  },
  //login 
  login:function(e){
    if (app.globalData.userInfo) {
      let  userInfo =  app.globalData.userInfo
      if (userInfo != "empty") {
        this.setData({
          isLogin: true,
          name:userInfo.neckname
        })
        wx.hideLoading({
          success: (res) => {
            wx.showToast({
              title: '欢迎回来！',
              icon: 'none'
            })
          },
        })
      } else {
        wx.getSetting({
          success: (res) => {
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                lang: 'zh_CN',
                success: res => {
                  let userInfo = res.userInfo
                  this.add(userInfo)
                  this.setData({
                    isLogin: true,
                    name:userInfo.neckname
                  })
                }
              })
            }
          }
        })
        wx.hideLoading({})
      }
    }else{
      app.userInfoCallback = userInfo => {
        console.log(userInfo)
        if (userInfo != "empty") {
          this.setData({
            isLogin: true,
            name:userInfo.neckname
          })
          wx.hideLoading({
            success: (res) => {
              wx.showToast({
                title: '欢迎回来！',
                icon: 'none'
              })
            },
          })
        } else {
          wx.getSetting({
            success: (res) => {
              if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                  lang: 'zh_CN',
                  success: res => {
                    let userInfo = res.userInfo
                    this.add(userInfo)
                    this.setData({
                      isLogin: true,
                      name:userInfo.neckname
                    })
                  }
                })
              }
            }
          })
          wx.hideLoading({})
        }
      }
    }
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
    let userInfo = app.globalData.userInfo
    if (app.globalData.userInfo) {
      this.setData({
             class:userInfo.class,
             name:userInfo.neckname
      })
    }
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