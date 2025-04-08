Page({
  navigateToHistory(){
    wx.navigateTo({
        url: '/pages/history/index'
      });
},
handleUserClick(){
  wx.request({
    ur1:'',//实际后端地址
    method:'GET',
    success:(res)=>{
      console.log(res.data);
    },
    fail:(err)=>{
      console.error(err);
    }
  })
},
  data: {
    openId: '',
    title:"",
    content:""
  },
});
