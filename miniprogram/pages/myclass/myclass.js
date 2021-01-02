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
    haveClass:false,
  },
  //加入班级
  add:function(e){
    this.setData({
      haveClass:true
    })
  },  
  //创建班级
  create:function(e){
    wx.navigateTo({
      url: '/pages/addclass/addclass',
    })
  },
  //更多
  more:function(e){

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