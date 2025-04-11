Page({
  navigateToHistory(){
    wx.navigateTo({
        url: '/pages/history/index'
      });
},
handleUserClick(){
  wx.request({
    ur1:'http://127.0.0.1:8000/api/v1/users/register',//实际后端地址
    method:'GET',
    
    success:(res)=>{
      console.log(res.data);
    },
    fail:(err)=>{
      console.error(err);
    }
  })
},
handleUserClick() {
  wx.request({
      url: 'http://127.0.0.1:8000/api/v1/users/register',
      method: 'GET',
      success: (res) => {
          this.setData({
              // 根据后端返回的数据结构更新页面数据
              userInfo: res.data
          });
      },
      fail: (err) => {
          console.error(err);
      }
  });
},
  data: {
    openId: '',
    title:"",
    content:""
  },
});
