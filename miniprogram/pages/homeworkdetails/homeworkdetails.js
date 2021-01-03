// pages/homeworkdetails/homeworkdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srcarray:[],
    FilePaths:[]
  },
  submit(e){    //提交
    console.log(e.detail.value);
  },
  uploadfile(e){  //选择文件
    var that = this;
    var filepaths = this.data.FilePaths;
    wx.chooseMessageFile({
      count: 3,
      type: 'file',
      success(res){
        let tempFilePaths = res.tempFiles;
        filepaths = filepaths.concat(tempFilePaths);
        that.setData({
          FilePaths: filepaths
        });
      },
    })
  },
  uploadimage(e){ //选择图片
    var that = this;
    var srcarray = this.data.srcarray;
    if(srcarray.length<9){
      wx.chooseImage({
        count: 9,
        success(res){
          let tempFilePaths = res.tempFilePaths;
          let array = srcarray.concat(tempFilePaths);
          that.setData({
            srcarray: array
          });
        }
      })
    }else{
      wx.showToast({
        title: '最多可选择9张图片',
        icon: 'none'
      })
    }
  },
  delimage(e){ //删除图片
    var srcarray = this.data.srcarray;
    srcarray.splice(e.currentTarget.dataset.index,1);
    this.setData({
      srcarray:srcarray
    });
  },
  delfile(e){ //删除文件
    var filepaths = this.data.FilePaths;
    filepaths.splice(e.currentTarget.dataset.index,1);
    this.setData({
      FilePaths:filepaths
    });
  },
  previewimage(e){ //预览图片
    wx.previewImage({
      urls: [e.currentTarget.dataset.src],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    var that = this;
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      that.setData({
        homework:data.data
      });
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