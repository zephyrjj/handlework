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
      db.collection('Class').add({ //添加班级信息到班级集合
        data: {
          cName: classInfo.cname,
          stuNum: classInfo.num
        }
      }).then(res => {
        console.log(res)
        let classid = res._id
        app.globalData.userInfo.class = classid
        wx.cloud.database().collection('User').doc(app.globalData.userInfo._id).update({ //添加班级的id到个人信息中
          data: {
            class: classid
          }
        }).then(res => {
          db.collection('classMember').add({ //向班级成员表添加个人openid以及负责人标记
            data: {
              class_id: classid, //班级的id
              tag: 'H', //H代表管理员，P代表普通学生
            }
          }).then(res => {
            app.globalData.userInfo.cName = classInfo.cname
            wx.showToast({
              title: '创建成功',
              icon: 'success'
            })
          })
        }).catch(err => {
          console.log(err)
        })
      }).catch(err => {
        console.log(err)
        wx.showToast({
          title: '发生了错误请稍后再试',
          icon: 'none'
        })
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