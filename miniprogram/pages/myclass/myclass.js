const app = getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        sco: '3118003916',
        name: 'roger',
        job: '管理员',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      },
      {
        sco: '3118003918',
        name: 'gogo',
        job: '学生',
      }
    ],

    chooseSize: false, //判断点击更多
    addclass: false, //加入班级
    total: 36 //班级总人数
  },
  //加入班级
  add: function (e) {
    this.setData({
      addclass: true
    })
  },
  confirm(e) {
    let inviteNum = e.detail.value.inviteNum
    if (inviteNum) {
      db.collection('Class').where({
        inviteNum: inviteNum
      }).get().then(async (res) => {
        let classdetail = res.data[0]
        wx.showModal({
          title: '申请加入',
          content: '是否加入班级：' + classdetail.cName,
          success: res => {
            if (res.confirm) {
              db.collection('User').doc(app.globalData.userInfo._id).update({
                data: {
                  class: classdetail._id
                }
              }).then(res => {
                db.collection('classMember').add({
                  data: {
                    class_id: classdetail._id, //班级的id
                    tag: 'P', //H代表管理员，P代表普通学生
                  }
                }).then(res => {
                  wx.showToast({
                    title: '加入成功',
                    icon: 'success',
                    success: res => {
                      this.setData({
                        addclass: false,
                        haveClass: true
                      })
                      app.globalData.userInfo.class = classdetail._id
                      app.globalData.userInfo.cName = classdetail.cName
                    }
                  })
                })
              })
            } else if (res.cancel) {
              wx.showToast({
                title: '已取消',
                icon: 'none'
              })
            }
          }
        })
      })
    } else {
      wx.showToast({
        title: '不能为空！',
        icon: 'none'
      })
    }
  },
  //叉叉的按钮
  hidenshadow: function (e) {
    this.setData({
      addclass: false
    })
  },
  //创建班级
  create: function (e) {
    wx.navigateTo({
      url: '/pages/addclass/addclass',
    })
  },
  //更多的按钮
  more:function(e){
    if (this.data.chooseSize == false) {
      this.showlist();
    } 
  },
  //显示动画函数
  showlist:function(e){
    var that = this;
    var animation = wx.createAnimation({
    // 动画持续时间
      duration: 500,
      timingFunction: 'linear'
    })
  // 将该变量赋值给当前动画
    that.animation = animation
  // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(1000).step()
    that.setData({
    // 通过export()方法导出数据
    animationData: animation.export(),
    chooseSize: true
  })
  //设置延时
  setTimeout(function () {
    animation.translateY(0).step()
    that.setData({
      animationData: animation.export(),
      clearcart: false
    })
  }, 100)
  },
  //隐藏动画函数
  hidelist:function(e){
    var that = this;
    var animation = wx.createAnimation({
      duration:500,
      timingFunction:'linear'
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData:animation.export()
      
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 100)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const classid = app.globalData.userInfo.class
    this.setData({
      haveClass: classid != '' ? classid : false, //判断是否有班级
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
    wx.setNavigationBarTitle({
      title: '我的班级',
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