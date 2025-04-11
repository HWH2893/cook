// cook/miniprogram/pages/page1.1/index.js
Page({
    data: {},
    // 新增食材识别方法
    identifyIngredients() {
        wx.chooseImage({
            count: 1,
            success: (res) => {
                const tempFilePaths = res.tempFilePaths[0];
                wx.uploadFile({
                    url: 'http://127.0.0.1:8000/api/v1/ai/detect_ingredients',
                    filePath: tempFilePaths,
                    name: 'file',
                    success: (res) => {
                        const data = JSON.parse(res.data);
                        console.log('食材识别结果:', data);
                        wx.showToast({
                            title: data.message,
                            icon: 'none'
                        });
                    },
                    fail: (err) => {
                        console.error('食材识别失败:', err);
                        wx.showToast({
                            title: '食材识别失败',
                            icon: 'none'
                        });
                    }
                });
            }
        });
    }
});