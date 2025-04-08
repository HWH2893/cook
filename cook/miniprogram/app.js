App({
  onLaunch: function () 
  {
   //
      wx.cloud.init
      ({
        env: "",  //环境id为空
        traceUser: true,  //跟踪用户访问
      });
    this.globalData = {};  //初始化全局数据对象
  },
});
