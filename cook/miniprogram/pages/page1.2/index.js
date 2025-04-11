// cook/miniprogram/pages/page1.2/index.js
Page({
    data: {},
    // 新增获取 AR 指导方法
    getARGuide() {
        const recipe_id = 1; // 假设食谱 ID 为 1
        wx.request({
            url: `http://127.0.0.1:8000/api/v1/ar/guide/${recipe_id}`,
            method: 'GET',
            responseType: 'arraybuffer',
            success: (res) => {
                // 处理视频流数据
                console.log('AR 指导视频流:', res.data);
            },
            fail: (err) => {
                console.error('获取 AR 指导失败:', err);
                wx.showToast({
                    title: '获取 AR 指导失败',
                    icon: 'none'
                });
            }
        });
    }
});