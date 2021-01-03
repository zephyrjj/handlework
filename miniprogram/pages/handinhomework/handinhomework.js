// pages/handinhomework/handinhomework.js
const date = new Date();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    homeworklist: [{
      id: '1',
      title: '数据库作业',
      time: '2021年1月1日',
      deadline: '2021年1月2日20：00',
      content: '数据库设计报告'
    }, {
      id: '2',
      title: '小程序作业',
      time: '2021年1月2日',
      deadline: '2021年1月3日20：00',
      content: '音乐小程序'
    }, {
      id: '3',
      title: '数据挖掘作业',
      time: '2021年1月3日',
      deadline: '2021年1月4日20：00',
      content: '数据挖掘报告'
    }]
  },
  release() {
    console.log('发布作业');

  },
  details(e) {
    wx.navigateTo({
      url: '/pages/homeworkdetails/homeworkdetails',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          data: e.currentTarget.dataset.homework
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    app.userInfoCallback = userInfo => {
      if (userInfo != 'empty') {
        this.setData({
          isLogin: true,
          name: userInfo.neckname
        })
        setTimeout(() => {
          that.setData({
            class: userInfo.cName
          })
        }, 200)
      } else {
        this.setData({
          name: '未登录'
        })
      }

    }

    var day = date.getDay();
    var month = date.getMonth() + 1;
    var dat = date.getDate();
    var Da = this.getDay(day);
    this.setData({
      day: Da,
      date: month + '月' + dat + '日'
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
    let userInfo = app.globalData.userInfo
    if (userInfo) {
      this.setData({
        isLogin: true,
        name: userInfo.neckname,
      })
      if (userInfo.class) {
        this.setData({
          class: userInfo.cName
        })
      }
    }
  },
  getDay(day) {
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
      case 0:
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