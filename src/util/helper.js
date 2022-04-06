let printDate_month= function(){
    let obj=new Date();
    return obj.toDateString()
}
   const date_month=printDate_month()
   console.log(date_month)
   
    module.exports.date_month=printDate_month



let getBatchInfo=function(){
    console.log("W3,D3,the topic being taught today is Nodejs Module System")
}
  module.exports.getBatchInfo=getBatchInfo

