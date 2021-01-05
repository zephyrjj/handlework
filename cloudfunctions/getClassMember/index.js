// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数

exports.main = async (event, context) => {
  let list = []
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
    .catch(err=>{
      console.log(err)
    })
     if(list!=[]){
       return list
     }else{
       return 'error'
     }

}