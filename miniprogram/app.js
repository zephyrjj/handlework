App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
      this.globalData = {
        login: false,
        classdeatil: {}
      }
      this.checkLogin()
    }
  },

  checkLogin: function () {
    const db = wx.cloud.database()
    const user = db.collection('User')

    wx.cloud.callFunction({
      name: 'login',
      data: {},
    }).then(async (res) => {
      await user.where({
        _openid: res.result.openid
      }).get().then(async (res) => {
        {
          if (res.data.length != 0) {
            this.globalData.userInfo = res.data[0]
            if (res.data[0].class) {
              await wx.cloud.database().collection('Class').where({
                _id: res.data[0].class
              }).field({
                cName: true
              }).get({
                success: res => {
                  console.log(res)
                  this.globalData.userInfo.cName = res.data[0].cName
                }
              })
              if (this.userInfoCallback) { //确保onLaunch比onLoad先执行
                this.userInfoCallback(this.globalData.userInfo)
              }
            } else {
              this.globalData.userInfo.cName = ''
              if (this.userInfoCallback) { //确保onLaunch比onLoad先执行
                this.userInfoCallback(this.globalData.userInfo)
              }
            }
          } else {
            this.globalData.userInfo = 'empty'
            if (this.userInfoCallback) {
              this.userInfoCallback('empty');
            }
          }
        }
      })
    })
  }
})