Page({
  handleSearchClick(){
    wx.request({
      ur1:'',//实际后端地址
      method:'GET',
      success:(res)=>{
        console.log(res.data);
      },
      fail:(err)=>{
        console.error(err);
      }
    });
  },
  data: {
    searchValue: '', // 搜索框的值
    hotSearchList: ['001', '002'], // 热门搜索列表
    historySearchList: [], // 历史搜索列表
    resultList: [], // 搜索结果列表
    showHotSearch: true, // 是否显示热门搜索
    showHistorySearch: true, // 是否显示历史搜索
    showSearchResult: false, // 是否显示搜索结果
    showEmptyResult: false // 是否显示无结果提示
  },

  onLoad() {
    // 从本地缓存加载历史搜索记录
    this.loadHistorySearch();
  },



  // 输入框输入事件
  handleInput(e) {
    this.setData({
      searchValue: e.detail.value
    });
  },

  // 清除输入
  clearInput() {
    this.setData({
      searchValue: '',
      showHotSearch: true,
      showHistorySearch: true,
      showSearchResult: false,
      showEmptyResult: false
    });
  },

  // 点击搜索按钮或键盘搜索键
  handleSearch() {
    const keyword = this.data.searchValue.trim();
    if (!keyword) {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      });
      return;
    }

    // 保存搜索记录
    this.saveSearchHistory(keyword);

    // 模拟搜索 - 实际项目中替换为API调用
    this.mockSearch(keyword);
  },

  // 保存搜索历史
  saveSearchHistory(keyword) {
    let history = wx.getStorageSync('searchHistory') || [];
    // 去除重复记录
    history = history.filter(item => item !== keyword);
    // 添加到数组开头
    history.unshift(keyword);
    // 限制最多保存10条
    if (history.length > 10) {
      history = history.slice(0, 10);
    }
    wx.setStorageSync('searchHistory', history);
    this.setData({
      historySearchList: history
    });
  },

  // 模拟搜索
  mockSearch(keyword) {
    // 显示加载中
    wx.showLoading({
      title: '搜索中...',
    });

    // 模拟网络请求延迟
    setTimeout(() => {
      wx.hideLoading();
      
      // 模拟搜索结果 - 实际项目中替换为真实数据
      const mockData = [
        { id: 1, title: `${keyword}开发指南`, desc: `这是一篇关于${keyword}的详细开发指南，包含了各种实用技巧和最佳实践。` },
        { id: 2, title: `深入理解${keyword}`, desc: `本文深入讲解了${keyword}的核心原理和工作机制，适合进阶学习。` },
        { id: 3, title: `${keyword}入门教程`, desc: `新手必看的${keyword}入门教程，从零开始学习${keyword}开发。` },
        { id: 4, title: `${keyword}常见问题解答`, desc: `整理了${keyword}开发中最常见的50个问题及其解决方案。` },
        { id: 5, title: `${keyword}最佳实践`, desc: `总结了${keyword}开发中的最佳实践和性能优化技巧。` }
      ];

      // 随机决定是否有结果
      const hasResult = Math.random() > 0.2;
      
      if (hasResult) {
        this.setData({
          resultList: mockData,
          showHotSearch: false,
          showHistorySearch: false,
          showSearchResult: true,
          showEmptyResult: false
        });
      } else {
        this.setData({
          resultList: [],
          showHotSearch: false,
          showHistorySearch: false,
          showSearchResult: false,
          showEmptyResult: true
        });
      }
    }, 800);
  },

  // 点击标签搜索
  handleTagTap(e) {
    const keyword = e.currentTarget.dataset.keyword;
    this.setData({
      searchValue: keyword
    });
    this.handleSearch();
  },

  // 清除历史记录
  clearHistory() {
    wx.showModal({
      title: '提示',
      content: '确定要清空历史搜索记录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('searchHistory');
          this.setData({
            historySearchList: []
          });
        }
      }
    });
  },

  // 跳转到详情页
  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    });
  }
});