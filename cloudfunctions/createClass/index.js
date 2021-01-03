// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const HEX= require('./numcon.js')
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  var classid = null
  var inviteNum  = null
  const wxContext = cloud.getWXContext()
  try {
    await db.collection('Class').add({ //添加班级信息到班级集合
      data: {
        cName: event.cname,
        stuNum: event.num,
        _openid: wxContext.OPENID
      }
    }).then(res => {
      classid = res._id
      inviteNum = HEX.output62(classid)
      console.log(inviteNum)
      db.collection('Class').doc(classid).update({data:{inviteNum:inviteNum}})
      // app.globalData.userInfo.class = classid
      db.collection('User').doc(event._id).update({ //添加班级的id到个人信息中
        data: {
          class: classid,

        },
      }).catch(err => {
        console.log(err)
        return false
      })
    }).then(res=>{
      db.collection('classMember').add({ //向班级成员表添加个人openid以及负责人标记
        data: {
          class_id: classid, //班级的id
          _openid: wxContext.OPENID,
          tag: 'H', //H代表管理员，P代表普通学生
        }
      }).catch(err => {
        console.log(err)
        return false
      })
    }).then(res => {
      console.log(classid)
      return classid
      // app.globalData.userInfo.cName = classInfo.cname
      // wx.showToast({
      //   title: '创建成功',
      //   icon: 'success'
      // })
    }).catch(err => {
      // console.log(err)
      // wx.showToast({
      //   title: '发生了错误请稍后再试',
      //   icon: 'none'
      // })
      console.log(err)
      return false
    })
  } catch (e) {
    console.log(e)
  }
  if(classid){
    return {
      classid:classid,
      inviteNum:inviteNum
    }
  }
}