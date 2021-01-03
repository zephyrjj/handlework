// pages/myclass/myclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      sco:'3118003916',
      name:'roger',
      job:'管理员',
    },
      {
        sco:'3118003918',
        name:'gogo',
        job:'学生',
    },
    {
      sco:'3118003918',
      name:'gogo',
      job:'学生',
  },
  {
    sco:'3118003918',
    name:'gogo',
    job:'学生',
},
{
  sco:'3118003918',
  name:'gogo',
  job:'学生',
},
{
  sco:'3118003918',
  name:'gogo',
  job:'学生',
},
{
  sco:'3118003918',
  name:'gogo',
  job:'学生',
},
{
  sco:'3118003918',
  name:'gogo',
  job:'学生',
},
{
  sco:'3118003918',
  name:'gogo',
  job:'学生',
},
{
  sco:'3118003918',
  name:'gogo',
  job:'学生',
},
{
  sco:'3118003918',
  name:'gogo',
  job:'学生',
}
  ],
    haveClass:false,      //判断是否有班级
    chooseSize:false,     //判断点击更多
    addclass:false,       //加入班级
    total:36              //班级总人数
  },
  //加入班级
  add:function(e){
    this.setData({
      addclass:true
    })
  },
  //确认加入
  confirm(){
    this.setData({
      haveClass:true
    })
  },
  //叉叉的按钮
  hidenshadow:function(e){
    this.setData({
      addclass:false
    })
  },
  //创建班级
  create:function(e){
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