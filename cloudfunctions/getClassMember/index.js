// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数

exports.main = async (event, context) => {
  let list = []
  let Hnum = null
  await db.collection('classMember')
    .aggregate()
    .match({
      class_id: event.classid
    })
    .lookup({
      from: 'User',
      localField: '_openid',
      foreignField: '_openid',
      as: 'detail'
    })
    .end()
    .then(res => {
      list = res.list

      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  await db.collection('classMember')
    .aggregate()
    .match({
      class_id: event.classid,
      tag: 'H'
    })
    .count('Hnum')
    .end()
    .then(res => {
      console.log(res)
      Hnum = res.list[0].Hnum
    })
    .catch(err => {
      console.log(err)
    })
  if (list != []) {
    return {
      list: list,
      Hnum: Hnum
    }
  } else {
    return 'error'
  }

}